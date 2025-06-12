import React from "react";
import { CheckCircleIcon, UsersIcon, AwardIcon, ClockIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const About = (): JSX.Element => {
  const { content } = useContent();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-black mb-8 font-['Satoshi-Black',Helvetica]">
            {content.about.title}
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.about.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="w-20 h-20 bg-[#2585b8] rounded-full flex items-center justify-center mx-auto mb-6">
              <ClockIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-black text-black mb-3 font-['Satoshi-Black',Helvetica]">15+</h3>
            <p className="text-gray-600 text-lg font-bold">Years Experience</p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="w-20 h-20 bg-[#2585b8] rounded-full flex items-center justify-center mx-auto mb-6">
              <UsersIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-black text-black mb-3 font-['Satoshi-Black',Helvetica]">5000+</h3>
            <p className="text-gray-600 text-lg font-bold">Happy Customers</p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="w-20 h-20 bg-[#2585b8] rounded-full flex items-center justify-center mx-auto mb-6">
              <AwardIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-black text-black mb-3 font-['Satoshi-Black',Helvetica]">100%</h3>
            <p className="text-gray-600 text-lg font-bold">Satisfaction Rate</p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="w-20 h-20 bg-[#2585b8] rounded-full flex items-center justify-center mx-auto mb-6">
              <ClockIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-black text-black mb-3 font-['Satoshi-Black',Helvetica]">24/7</h3>
            <p className="text-gray-600 text-lg font-bold">Emergency Service</p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-4xl font-black text-center mb-12 font-['Satoshi-Black',Helvetica]">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.about.features.map((feature, index) => (
              <div key={index} className="flex items-center p-4">
                <CheckCircleIcon className="w-8 h-8 text-[#2585b8] mr-4 flex-shrink-0" />
                <span className="text-xl text-gray-700 font-bold">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-black mb-8 font-['Satoshi-Black',Helvetica]">
            Our Professional Team
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our team consists of highly trained, licensed, and experienced plumbers who are committed 
            to providing exceptional service. We stay up-to-date with the latest plumbing technologies 
            and techniques to ensure we can handle any plumbing challenge.
          </p>
        </div>
      </div>
    </div>
  );
};