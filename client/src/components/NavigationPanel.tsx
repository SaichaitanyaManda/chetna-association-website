import { X, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavigationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationPanel({ isOpen, onClose }: NavigationPanelProps) {
  const handleLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-30 transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <div className={cn("nav-panel bg-chetna-red text-white", isOpen && "open")}>
        <div className="flex flex-col h-full p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Chetna</h2>
              <p className="text-red-200 text-sm uppercase tracking-wider">Association of Canada</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
              data-testid="button-close-nav"
            >
              <X size={24} />
            </Button>
          </div>
        
        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <button
                data-testid="link-welcome"
                onClick={() => handleLinkClick('home')}
                className="block text-white text-base hover:text-red-200 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-red-600/20 font-medium"
              >
                Welcome
              </button>
            </li>
            <li>
              <button
                data-testid="link-mission"
                onClick={() => handleLinkClick('mission')}
                className="block text-white text-base hover:text-red-200 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-red-600/20 font-medium"
              >
                Our Mission
              </button>
            </li>
            <li>
              <button
                data-testid="link-awards"
                onClick={() => handleLinkClick('awards')}
                className="block text-white text-base hover:text-red-200 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-red-600/20 font-medium"
              >
                Dr. Ambedkar Awards
              </button>
            </li>
            <li>
              <button
                data-testid="link-gallery"
                onClick={() => handleLinkClick('gallery')}
                className="block text-white text-base hover:text-red-200 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-red-600/20 font-medium"
              >
                Community Gallery
              </button>
            </li>
            <li>
              <button
                data-testid="link-events"
                onClick={() => handleLinkClick('events')}
                className="block text-white text-base hover:text-red-200 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-red-600/20 font-medium"
              >
                Events & Programs
              </button>
            </li>
            <li>
              <button
                data-testid="link-about"
                onClick={() => handleLinkClick('about')}
                className="block text-white text-base hover:text-red-200 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-red-600/20 font-medium"
              >
                About
              </button>
            </li>
            <li>
              <button
                data-testid="link-contact"
                onClick={() => handleLinkClick('contact')}
                className="block text-white text-base hover:text-red-200 transition-colors text-left w-full py-2 px-3 rounded-lg hover:bg-red-600/20 font-medium"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Social Media Links */}
        <div className="border-t border-red-400 pt-4 mt-4">
          <div className="flex space-x-4 justify-center">
            <a href="#" className="text-white hover:text-red-200 transition-colors" data-testid="nav-facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-200 transition-colors" data-testid="nav-twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-200 transition-colors" data-testid="nav-instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-200 transition-colors" data-testid="nav-youtube">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-200 transition-colors" data-testid="nav-linkedin">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}