import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PhoneIcon, ClockIcon, AlertTriangleIcon, CheckCircleIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const Emergency = (): JSX.Element => {
  const { content } = useContent();

  const emergencyServices = [
    "Burst Pipes",
    "Severe Leaks",
    "Blocked Drains",
    "No Hot Water",
    "Toilet Overflows",
    "Gas Leaks",
    "Sewer Backups",
    "Frozen Pipes"
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-24 h-24 bg-[#ee1c32] rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangleIcon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-black text-black mb-8 font-['Satoshi-Black',Helvetica]">
            {content.emergency.title}
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            {content.emergency.description}
          </p>
          
          {/* Emergency CTA */}
          <div className="bg-[#ee1c32] rounded-2xl p-12 text-white mb-20">
            <h2 className="text-4xl font-black mb-8 font-['Satoshi-Black',Helvetica]">
              {content.emergency.availabilityText}
            </h2>
            <a href={`tel:${content.contact.phone}`}>
              <Button className="w-96 h-24 bg-white text-[#ee1c32] hover:bg-gray-100 text-3xl font-black rounded-[70px] relative shadow-lg">
                <PhoneIcon className="w-10 h-10 mr-4" />
                <span className="ml-[30px]">{content.contact.phone}</span>
                <div className="absolute w-[70px] h-[70px] top-[7px] right-[7px] bg-[#ee1c32] rounded-[40px]" />
              </Button>
            </a>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 font-['Satoshi-Black',Helvetica]">
            Emergency Services We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
                <CheckCircleIcon className="w-12 h-12 text-[#2585b8] mx-auto mb-4" />
                <h3 className="font-black text-black text-lg font-['Satoshi-Black',Helvetica]">{service}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us for Emergencies */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-black text-center mb-12 font-['Satoshi-Black',Helvetica]">
            Why Choose Us for Emergency Plumbing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <ClockIcon className="w-20 h-20 text-[#2585b8] mx-auto mb-6" />
              <h3 className="text-2xl font-black mb-4 font-['Satoshi-Black',Helvetica]">Rapid Response</h3>
              <p className="text-gray-600 text-lg">We arrive within 30-60 minutes of your call</p>
            </div>
            
            <div className="text-center p-6">
              <AlertTriangleIcon className="w-20 h-20 text-[#2585b8] mx-auto mb-6" />
              <h3 className="text-2xl font-black mb-4 font-['Satoshi-Black',Helvetica]">Emergency Equipment</h3>
              <p className="text-gray-600 text-lg">Fully stocked trucks ready for any emergency</p>
            </div>
            
            <div className="text-center p-6">
              <CheckCircleIcon className="w-20 h-20 text-[#2585b8] mx-auto mb-6" />
              <h3 className="text-2xl font-black mb-4 font-['Satoshi-Black',Helvetica]">Expert Technicians</h3>
              <p className="text-gray-600 text-lg">Experienced professionals available 24/7</p>
            </div>
          </div>
        </div>

        {/* What to Do in an Emergency */}
        <div className="bg-[#2585b8] rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-black text-center mb-12 font-['Satoshi-Black',Helvetica]">
            What to Do in a Plumbing Emergency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-6 font-['Satoshi-Black',Helvetica]">Immediate Steps:</h3>
              <ol className="list-decimal list-inside space-y-3 text-lg">
                <li>Turn off the main water supply</li>
                <li>Turn off electricity if water is near electrical outlets</li>
                <li>Move valuables away from the affected area</li>
                <li>Call us immediately</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 font-['Satoshi-Black',Helvetica]">Don't:</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Try to fix major leaks yourself</li>
                <li>Use electrical appliances near water</li>
                <li>Ignore small leaks - they can become big problems</li>
                <li>Wait - emergency situations get worse quickly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};