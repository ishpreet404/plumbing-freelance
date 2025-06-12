import { PhoneIcon } from "lucide-react";
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
      <div className="w-full h-20 bg-[#2585b8]">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-full">
          <div className="flex items-center">
            <div className="w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center mr-3">
              <PhoneIcon className="text-[#2585b8] w-6 h-6" />
            </div>
            <div className="font-black text-white text-2xl tracking-[0] leading-[normal] font-['Satoshi-Black',Helvetica]">
              {content.contact.phone}
            </div>
          </div>
          <div className="ml-auto font-black text-white text-lg tracking-[0] leading-[normal] font-['Satoshi-Black',Helvetica]">
            {content.contact.topBarText}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-[97px] h-[100px] relative">
              <div className="absolute w-[97px] h-[100px] top-0 left-0 bg-[url(/g10.png)] bg-[100%_100%]" />
              <div className="absolute w-[18px] h-2.5 top-16 left-[47px] bg-[#2685b8]" />
            </div>
            <img
              className="w-[174px] h-[34px] ml-4"
              alt="Logo"
              src="/group-6.png"
            />
          </Link>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path}
                      className={`${
                        location.pathname === item.path 
                          ? "font-['Satoshi-Black',Helvetica] font-black text-[#2585b8]" 
                          : "font-['Satoshi-Bold',Helvetica] font-bold text-black"
                      } text-lg tracking-[0] leading-[normal] hover:text-[#2585b8] transition-colors`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Button */}
          <Link to="/contact">
            <Button className="relative w-52 h-[60px] bg-[#ee1c32] rounded-[70px] hover:bg-[#d91828] transition-colors overflow-hidden group">
              <span className="font-['Satoshi-Black',Helvetica] font-black text-white text-xl relative z-10 pr-14">
                Contact Us
              </span>
              <div className="absolute w-[50px] h-[50px] top-[5px] right-[5px] bg-white rounded-full flex items-center justify-center">
                <span className="text-[#ee1c32] font-bold text-2xl">→</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};