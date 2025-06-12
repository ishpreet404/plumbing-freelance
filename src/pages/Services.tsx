import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { WrenchIcon, DropletIcon, FlameIcon, PipetteIcon as PipeIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const Services = (): JSX.Element => {
  const { content } = useContent();

  const serviceIcons = [WrenchIcon, DropletIcon, FlameIcon, PipeIcon];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-black mb-8 font-['Satoshi-Black',Helvetica]">
            {content.services.title}
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Professional plumbing services for residential and commercial properties in Toronto
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {content.services.serviceList.map((service, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length];
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#2585b8] rounded-full flex items-center justify-center mb-8">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 font-['Satoshi-Black',Helvetica]">{service.name}</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#2585b8] font-['Satoshi-Black',Helvetica]">{service.price}</span>
                  <Link to="/contact">
                    <Button className="w-40 h-14 bg-[#ee1c32] hover:bg-[#d91828] text-white rounded-[70px] font-black text-lg relative">
                      <span className="ml-[15px]">Get Quote</span>
                      <div className="absolute w-[40px] h-[40px] top-[7px] right-[7px] bg-white rounded-[25px]" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-4xl font-black text-center mb-12 font-['Satoshi-Black',Helvetica]">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-2xl font-black mb-4 font-['Satoshi-Black',Helvetica]">Bathroom Renovations</h3>
              <p className="text-gray-600 text-lg">Complete bathroom remodeling and fixture installation</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-black mb-4 font-['Satoshi-Black',Helvetica]">Kitchen Plumbing</h3>
              <p className="text-gray-600 text-lg">Kitchen sink, dishwasher, and garbage disposal services</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-black mb-4 font-['Satoshi-Black',Helvetica]">Sewer Line Services</h3>
              <p className="text-gray-600 text-lg">Sewer line inspection, cleaning, and repair</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-black mb-6 font-['Satoshi-Black',Helvetica]">Need a Custom Quote?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Contact us today for a free estimate on any plumbing service
          </p>
          <Link to="/contact">
            <Button className="w-80 h-20 bg-[#2585b8] hover:bg-[#1e6b96] text-white text-2xl font-black rounded-[70px] relative">
              <span className="ml-[25px]">Get Free Estimate</span>
              <div className="absolute w-[60px] h-[60px] top-[10px] right-[10px] bg-white rounded-[35px]" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};