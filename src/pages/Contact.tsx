import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { PhoneIcon, MapPinIcon, ClockIcon, MailIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const Contact = (): JSX.Element => {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-black mb-8 font-['Satoshi-Black',Helvetica]">Contact Us</h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Get in touch with Toronto's most trusted plumbing professionals. We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-black mb-8 font-['Satoshi-Black',Helvetica]">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2585b8] focus:border-transparent text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-bold text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2585b8] focus:border-transparent text-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2585b8] focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-lg font-bold text-gray-700 mb-3">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2585b8] focus:border-transparent text-lg"
                >
                  <option value="">Select a service</option>
                  <option value="emergency">Emergency Plumbing</option>
                  <option value="drain-cleaning">Drain Cleaning</option>
                  <option value="water-heater">Water Heater Service</option>
                  <option value="pipe-repair">Pipe Repair</option>
                  <option value="bathroom-renovation">Bathroom Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2585b8] focus:border-transparent text-lg"
                  placeholder="Please describe your plumbing issue or service request..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full h-16 bg-[#2585b8] hover:bg-[#1e6b96] text-white text-xl font-black rounded-xl">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            {/* Emergency Contact */}
            <div className="bg-[#ee1c32] rounded-2xl p-10 text-white mb-10">
              <h2 className="text-3xl font-black mb-6 font-['Satoshi-Black',Helvetica]">Emergency Service</h2>
              <p className="mb-8 text-xl">Need immediate help? Call us now!</p>
              <a href={`tel:${content.contact.phone}`}>
                <Button className="w-full h-16 bg-white text-[#ee1c32] hover:bg-gray-100 text-2xl font-black rounded-xl">
                  <PhoneIcon className="w-8 h-8 mr-4" />
                  {content.contact.phone}
                </Button>
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-black mb-8 font-['Satoshi-Black',Helvetica]">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <PhoneIcon className="w-8 h-8 text-[#2585b8] mr-4 mt-1" />
                  <div>
                    <h3 className="font-black mb-2 text-xl font-['Satoshi-Black',Helvetica]">Phone</h3>
                    <p className="text-gray-600 text-lg">{content.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MailIcon className="w-8 h-8 text-[#2585b8] mr-4 mt-1" />
                  <div>
                    <h3 className="font-black mb-2 text-xl font-['Satoshi-Black',Helvetica]">Email</h3>
                    <p className="text-gray-600 text-lg">info@torontoplumbing.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPinIcon className="w-8 h-8 text-[#2585b8] mr-4 mt-1" />
                  <div>
                    <h3 className="font-black mb-2 text-xl font-['Satoshi-Black',Helvetica]">Service Area</h3>
                    <p className="text-gray-600 text-lg">Toronto, ON and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="w-8 h-8 text-[#2585b8] mr-4 mt-1" />
                  <div>
                    <h3 className="font-black mb-2 text-xl font-['Satoshi-Black',Helvetica]">Hours</h3>
                    <p className="text-gray-600 text-lg">24/7 Emergency Service</p>
                    <p className="text-gray-600 text-lg">Regular Hours: Mon-Fri 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gray-50 rounded-2xl p-10 mt-10">
              <h3 className="text-2xl font-black mb-6 font-['Satoshi-Black',Helvetica]">Service Areas</h3>
              <div className="grid grid-cols-2 gap-3 text-lg text-gray-600 font-bold">
                <div>Downtown Toronto</div>
                <div>North York</div>
                <div>Scarborough</div>
                <div>Etobicoke</div>
                <div>Mississauga</div>
                <div>Brampton</div>
                <div>Markham</div>
                <div>Richmond Hill</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};