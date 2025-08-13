import { ReactNode, useState, createContext, useContext } from "react";
import Sidebar from "./Sidebar";
import NavigationPanel from "./NavigationPanel";
import ContactModal from "./ContactModal";
import { Button } from "./ui/button";

interface LayoutProps {
  children: ReactNode;
}

interface ContactModalContextType {
  openContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a Layout');
  }
  return context;
};

export default function Layout({ children }: LayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);

  return (
    <ContactModalContext.Provider value={{ openContactModal }}>
      <div className="bg-gray-50 dark:bg-gray-900 font-inter overflow-x-hidden transition-colors">
        <Sidebar onMenuToggle={() => setIsNavOpen(true)} />
        <NavigationPanel isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
        
        {/* Fixed Get Involved Button */}
        <Button
          data-testid="button-get-involved"
          onClick={openContactModal}
          className="get-involved-btn bg-chetna-red text-white px-6 py-3 rounded-lg hover:bg-chetna-red-dark transition-colors shadow-lg"
        >
          Get Involved
        </Button>

        {/* Main Content */}
        <main className="main-content">
          {children}
        </main>

        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </ContactModalContext.Provider>
  );
}