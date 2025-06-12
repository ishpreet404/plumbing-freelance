import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CheckCircleIcon, PhoneIcon, ClockIcon, ShieldCheckIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const Home = (): JSX.Element => {
  const { content } = useContent();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[750px] overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Professional plumber"
          src="/medium-shot-man-posing-studio-2.png"
        />
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,78,109,0.9)] to-[rgba(15,78,109,0.7)]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-black text-white mb-6 leading-tight [text-shadow:-3px_3px_0px_#2585b8]">
              {content.hero.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-2xl font-bold text-white mb-8">
              {content.hero.subtitle}
            </p>

            <Link to="/contact">
              <Button className="w-[312px] h-[60px] bg-[#ee1c32] rounded-[70px] shadow-lg hover:bg-[#d91828] transition-colors relative">
                <span className="font-black text-white text-xl ml-[25px]">
                  {content.hero.buttonText}
                </span>
                <div className="absolute w-[50px] h-[50px] top-[5px] right-[5px] bg-white rounded-[30px]" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6 font-['Satoshi-Black',Helvetica]">
              Our Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional plumbing solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.serviceList.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#2585b8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-['Satoshi-Bold',Helvetica]">{service.name}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                <div className="text-center">
                  <span className="text-lg font-bold text-[#2585b8]">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6 font-['Satoshi-Black',Helvetica]">
              Why Choose Toronto Plumbing?
            </h2>
            <p className="text-xl text-gray-600">Professional plumbing services you can trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <ClockIcon className="w-20 h-20 text-[#2585b8] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-['Satoshi-Bold',Helvetica]">24/7 Emergency Service</h3>
              <p className="text-gray-600 text-lg">Available round the clock for all your emergency plumbing needs</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <ShieldCheckIcon className="w-20 h-20 text-[#2585b8] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-['Satoshi-Bold',Helvetica]">Licensed & Insured</h3>
              <p className="text-gray-600 text-lg">Fully licensed and insured professionals for your peace of mind</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <CheckCircleIcon className="w-20 h-20 text-[#2585b8] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-['Satoshi-Bold',Helvetica]">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-lg">100% satisfaction guarantee on all our plumbing services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-[#2585b8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-6 font-['Satoshi-Black',Helvetica]">
            Need Emergency Plumbing Service?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 font-bold">Don't wait - call us now for immediate assistance!</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={`tel:${content.contact.phone}`}>
              <Button className="w-80 h-20 bg-[#ee1c32] rounded-[70px] text-2xl font-black hover:bg-[#d91828] transition-colors relative shadow-lg">
                <PhoneIcon className="w-8 h-8 mr-4" />
                <span className="ml-[25px]">Call Now</span>
                <div className="absolute w-[60px] h-[60px] top-[10px] right-[10px] bg-white rounded-[35px]" />
              </Button>
            </a>
            
            <Link to="/contact">
              <Button className="w-80 h-20 border-4 border-white text-white rounded-[70px] text-2xl font-black hover:bg-white hover:text-[#2585b8] transition-colors bg-transparent">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};