import { PhoneIcon, ArrowRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { useContent } from "../contexts/ContentContext";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export const Header = (): JSX.Element => {
  const location = useLocation();
  const { content } = useContent();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Emergency Services", path: "/emergency" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <header className="relative">
      {/* Top blue bar */}
      <div className="w-full bg-[#3498b8] py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Phone with icon */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <PhoneIcon className="text-[#3498b8] w-4 h-4" />
            </div>
            <span className="text-white text-sm font-medium">
              +1 (604) 805-2105
            </span>
          </div>

          {/* Center text */}
          <div className="text-white text-sm font-medium hidden md:block">
            Extra 10% OFF every Friday
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                className="h-16 w-auto"
                alt="RooterX Plumbing Logo"
                src="https://rooterx.ca/assets/img/logo.png"
              />
            </Link>

            {/* Navigation - centered */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`${
                        location.pathname === item.path 
                          ? "font-bold text-[#3498b8]" 
                          : "font-medium text-gray-700"
                      } text-base hover:text-[#3498b8] transition-colors`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Button */}
            <Link to="/contact" className="flex items-center">
              <button className="relative bg-[#ee1c32] hover:bg-[#d91828] text-white pl-6 pr-14 py-3 rounded-full font-bold shadow-md transition-all flex items-center h-12">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="text-[#ee1c32] w-5 h-5" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};