import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#014036] text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Pedal Planet</h3>
            <p className="text-gray-400">
              Revolutionizing urban mobility, one bicycle at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Shop
                </a>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-blue-500">
                  About Us
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-bold mb-4">Customer Support</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/bicycles" className="hover:text-blue-500">
                  Shipping
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                123 Cycling Lane, Urban City
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                (555) PEDAL-GO
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                support@pedalplanet.com
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-white">
            © 2024 Pedal Planet. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
