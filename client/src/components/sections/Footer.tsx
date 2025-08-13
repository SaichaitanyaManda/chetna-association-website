import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Chetna Association of Canada</h3>
            <p className="text-gray-300 mb-4">
              Dedicated to promoting equality, justice, and social progress in communities across Canada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Mission</a></li>
              <li><a href="#awards" className="hover:text-white transition-colors">Awards</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Education & Awareness</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Outreach</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advocacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail size={16} />
                <span className="ml-2">info@chetna.ca</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} />
                <span className="ml-2">+1 (604) 555-0123</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mt-1" />
                <span className="ml-2">Vancouver, British Columbia<br />Canada</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Chetna Association of Canada. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}