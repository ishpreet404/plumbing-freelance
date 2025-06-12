import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const Footer = (): JSX.Element => {
  const { content } = useContent();

  return (
    <footer className="bg-[#2585b8] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Toronto Plumbing</h3>
            <p className="text-blue-100 mb-4">
              Professional plumbing services in Toronto and surrounding areas. 
              Licensed, insured, and available 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/emergency" className="text-blue-100 hover:text-white transition-colors">Emergency</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Emergency Plumbing</li>
              <li>Drain Cleaning</li>
              <li>Water Heater Repair</li>
              <li>Pipe Repair & Installation</li>
              <li>Bathroom Renovations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3" />
                <span>{content.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-3" />
                <span>Toronto, ON, Canada</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-3" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2025 Toronto Plumbing Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};