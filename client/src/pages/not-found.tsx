import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Button 
            onClick={() => setLocation("/")}
            className="bg-chetna-red hover:bg-chetna-red-dark text-white"
            data-testid="button-home"
          >
            Go Home
          </Button>
        </div>
      </div>
    </Layout>
  );
}