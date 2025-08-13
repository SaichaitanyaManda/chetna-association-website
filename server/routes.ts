import type { Express } from "express";
import { contacts, insertContactSchema } from "@shared/schema";
import { storage } from "./storage.js";
import { z } from "zod";

export function registerRoutes(app: Express) {
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Get all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const allContacts = await storage.getContacts();
      res.json(allContacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Create contact
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Failed to create contact" });
      }
    }
  });

  // Get contact by ID
  app.get("/api/contacts/:id", async (req, res) => {
    try {
      const contact = await storage.getContactById(req.params.id);
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.json(contact);
    } catch (error) {
      console.error("Error fetching contact:", error);
      res.status(500).json({ error: "Failed to fetch contact" });
    }
  });
}