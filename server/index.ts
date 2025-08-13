import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { setupVite, serveStatic } from "./vite.js";
import { registerRoutes } from "./routes.js";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup WebSocket server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("WebSocket connection established");
  
  ws.on("message", (message) => {
    console.log("Received:", message.toString());
  });
  
  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});

// Register API routes
registerRoutes(app);

// Setup Vite or static serving
if (process.env.NODE_ENV === "development") {
  await setupVite(app, server);
} else {
  serveStatic(app);
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});