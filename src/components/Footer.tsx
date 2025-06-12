import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const Footer = (): JSX.Element => {
  const { content } = useContent();

  return (
    <>
      {/* Wave Shape */}
      <div className="relative">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 -mb-1">
          <path 
            d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z" 
            fill="#1a4d66"
          />
        </svg>
      </div>

      <footer className="bg-[#1a4d66] text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Logo and Company Info */}
            <div className="lg:col-span-1">
              <img 
                src="https://rooterx.ca/assets/img/logo.png" 
                alt="RooterX Plumbing" 
                className="h-20 mb-4"
              />
              <p className="text-sm text-gray-300 italic mb-6">
                Driven by RooterX, Defined by Excellence.
              </p>
              
              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {/* Instagram */}
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  {/* Twitter/X */}
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Link</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Emergency Services</li>
                <li>Commercial Service</li>
                <li>Drain Cleaning</li>
                <li>Water Heater Repair</li>
                <li>Leak Detection</li>
                <li>Pipe Installation</li>
                <li>Bathroom Plumbing</li>
              </ul>
            </div>

            {/* Services Area */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services Area</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Brampton</li>
                <li>Mississauga</li>
                <li>Caledon</li>
                <li>Vaughan</li>
                <li>Etobicoke</li>
                <li>Toronto</li>
                <li>North York</li>
                <li>Georgetown</li>
                <li>Oakville</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:${content.contact.phone}`} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors">
                      <PhoneIcon className="w-5 h-5 text-[#dc3545]" />
                    </div>
                    <span>{content.contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:impulseplumbing@gmail.com" className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors">
                      <MailIcon className="w-5 h-5 text-[#dc3545]" />
                    </div>
                    <span>impulseplumbing@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 text-[#dc3545]" />
                    </div>
                    <span>100 Harbour St #1408,<br />Toronto, ON M5J 0B5</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-300">
              Copyright © 2025 Impulse Plumbing. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};