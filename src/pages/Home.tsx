import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useContent } from "../contexts/ContentContext";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const Home = (): JSX.Element => {
  const { content } = useContent();

  return (
    <div className="font-['Satoshi',system-ui,-apple-system,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,sans-serif]">
     {/* Hero Section - Updated to match the image */}
<section className="relative w-full mt-4 mb-8">
  <div className="max-w-[1400px] mx-auto px-4">
    <div className="relative bg-[#2B5F75] rounded-[40px] overflow-hidden min-h-[400px]">
      {/* Red accent shapes */}
      <div className="absolute bottom-0 left-[40%] w-[400px] h-[400px] bg-[#dc3545] rounded-full -mb-[200px] opacity-90 blur-2xl"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#dc3545] rounded-full -mt-[150px] -mr-[100px] opacity-90 blur-2xl"></div>
      
      <div className="relative z-10 flex items-center min-h-[400px]">
        {/* Left Content */}
        <motion.div
          className="flex-1 p-12 lg:pl-16 lg:pr-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-[1.1] max-w-[600px]">
            RooterX Plumbing — Prompt, Reliable, and Local Plumbing Solutions.
          </h1>
          
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button className="px-8 py-4 bg-[#dc3545] hover:bg-[#bb2d3b] text-white rounded-full text-lg font-bold shadow-lg transition-all flex items-center gap-2">
                Call Us Now
                <span className="ml-1">→</span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Right Image Container */}
        <motion.div 
          className="hidden lg:block relative w-[700px] h-[400px] mr-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-[30px] overflow-hidden">
            <img
              src="/medium-shot-man-posing-studio-2.png"
              alt="Professional plumber at work"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-black text-center mb-16 text-[#212529]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Most Reliable Plumbing Service in Toronto
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Image with accent */}
          <motion.div 
            className="relative flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Parallax speed={-5}>
              <div className="absolute -top-4 -left-4 w-full h-full border-t-4 border-l-4 border-[#dc3545] rounded-tl-[20px]" />
              <img
                src="/about-plumber1.png"
                alt="Professional plumber at work"
                className="relative rounded-[20px] shadow-xl w-full max-w-[500px] h-[350px] object-cover"
              />
            </Parallax>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black mb-6 text-[#212529]">
              About RooterX Plumbing and Drain inc.
            </h3>
            <p className="text-lg leading-relaxed text-[#6c757d] mb-6">
              RooterX Plumbing is a leading provider of comprehensive plumbing services in the Greater
              Toronto Area. As one of the most trusted plumbing companies serving Brampton,
              Mississauga, Caledon, Vaughan, Etobicoke, Toronto, North York, Georgetown, and
              Oakville, we pride ourselves on our commitment to quality and reliability.
            </p>
            <p className="text-lg leading-relaxed text-[#6c757d]">
              Our team of licensed plumbers is dedicated to delivering exceptional plumbing repair and maintenance
              —from routine fixes to emergency services. When you search for a "plumber near me" or
              "plumbers close to me," you'll find that our local expertise and transparent pricing set us
              apart.
            </p>
          </motion.div>
        </div>

        {/* Mission Card */}
        <motion.div 
          className="bg-white rounded-[24px] border-2 border-[#0d6efd] p-10 shadow-lg max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h3 className="text-3xl font-black mb-6 text-[#212529]">Our Mission</h3>
          <p className="text-lg text-[#6c757d] leading-relaxed">
            Our mission is to provide superior plumbing services that ensure the safety, comfort, and efficiency of your home or business. 
            Whether you need immediate plumbing repair or scheduled maintenance, we're the "near me plumber" you can rely on for prompt, 
            professional service. At RooterX Plumbing, our customer-first approach, advanced techniques, and commitment to excellence 
            make us the preferred choice for all your "plumbing services near me" needs.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f8f9fa] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-8 text-[#212529]">
                Why Choose RooterX Plumbing and drain inc.?
              </h2>
              <ul className="space-y-4 text-lg">
                {[
                  { icon: "🔧", title: "Local Expertise", desc: "Deeply rooted in the GTA, we understand the unique plumbing challenges of our communities." },
                  { icon: "✅", title: "Licensed & Insured", desc: "Our fully certified professionals ensure quality workmanship and safety on every job." },
                  { icon: "💰", title: "Transparent Pricing", desc: "Enjoy clear, upfront quotes with no hidden fees—what you see is what you pay." },
                  { icon: "📞", title: "24/7 Emergency Response", desc: "Plumbing emergencies don't wait, and neither do we. We're ready to assist around the clock." },
                  { icon: "🚀", title: "Advanced Technology", desc: "We employ state-of-the-art tools and techniques to deliver efficient and lasting solutions." },
                  { icon: "⚙️", title: "Quality Craftsmanship", desc: "Our commitment to excellence ensures every repair or installation is done right the first time." },
                  { icon: "🤝", title: "Customer-Centric Service", desc: "We prioritize your satisfaction, building long-lasting relationships through reliable service." }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <div>
                      <span className="font-bold text-[#212529]">{item.title}:</span>
                      <span className="text-[#6c757d] ml-2">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="relative flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Parallax speed={5}>
                <div className="absolute -top-4 -right-4 w-full h-full border-t-4 border-r-4 border-[#dc3545] rounded-tr-[20px]" />
                <img
                  src="/about-plumber2.png"
                  alt="Plumber working"
                  className="relative rounded-[20px] shadow-xl w-full max-w-[500px] h-[400px] object-cover"
                />
              </Parallax>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#0d6efd] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Know About Our Plumbing Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {content.services.serviceList.slice(0, 4).map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-[20px] p-6 shadow-xl hover:shadow-2xl transition-shadow relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-6 left-6 w-12 h-12 bg-[#dc3545] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-40 object-cover rounded-[12px] mb-4 mt-4"
                  />
                )}
                
                <h3 className="text-xl font-bold text-[#212529] mb-3">{service.name}</h3>
                <p className="text-[#6c757d] mb-4 text-sm">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-[#dc3545] font-bold hover:underline inline-flex items-center"
                >
                  Learn More <span className="ml-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button className="bg-[#dc3545] hover:bg-[#bb2d3b] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-black text-center mb-12 text-[#212529]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {[
              {
                question: "What areas does RooterX Plumbing serve?",
                answer: "We proudly provide plumbing services in Brampton, Mississauga, Caledon, Vaughan, Etobicoke, Toronto, North York, Georgetown, and Oakville. If you're looking for \"plumbing services near me\" in any of these regions, our local team is ready to help.",
                isOpen: true
              },
              {
                question: "What types of services do you offer?",
                answer: "We offer comprehensive plumbing services including emergency repairs, drain cleaning, water heater installation and repair, pipe repairs and replacement, fixture installation, sewer line services, and preventive maintenance.",
                isOpen: false
              },
              {
                question: "Are you available for emergency plumbing repair?",
                answer: "Yes! We provide 24/7 emergency plumbing services. Plumbing emergencies don't wait, and neither do we. Call us anytime for immediate assistance.",
                isOpen: false
              },
              {
                question: "How do I get a free quote for your plumbing services?",
                answer: "Getting a free quote is easy! You can call us directly, fill out our online contact form, or click the 'Get Free Quote' button on our website. We'll provide transparent, upfront pricing with no hidden fees.",
                isOpen: false
              },
              {
                question: "What sets RooterX Plumbing apart from other plumbing companies?",
                answer: "We stand out through our local GTA expertise, licensed and insured professionals, transparent pricing, 24/7 availability, advanced technology, quality craftsmanship, and customer-centric approach. Our commitment to excellence and reliability makes us the preferred choice.",
                isOpen: false
              },
              {
                question: "Do you offer routine maintenance services?",
                answer: "Yes, we offer comprehensive routine maintenance services to prevent plumbing issues before they become emergencies. Regular maintenance can extend the life of your plumbing system and save you money in the long run.",
                isOpen: false
              },
              {
                question: "How can I schedule an appointment with RooterX Plumbing?",
                answer: "Scheduling is simple! Call us at our main number, use our online booking system, or fill out the contact form. We offer flexible scheduling to accommodate your needs, including same-day service for urgent matters.",
                isOpen: false
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQItem 
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={faq.isOpen}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-[#e8f4f8] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-black text-center mb-16 text-[#212529]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Customer Reviews
          </motion.h2>

          {/* Reviews Carousel */}
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {[
                {
                  name: "Jack Smith",
                  location: "Toronto, Canada",
                  review: "I needed urgent plumbing repair and after searching for plumbers near me, I found RooterX Plumbing—they delivered exceptional plumbing services with speed and professionalism.",
                  rating: 5,
                  image: "/avatar1.jpg"
                },
                {
                  name: "Jack Smith",
                  location: "Toronto, Canada",
                  review: "When my sink started leaking, I contacted RooterX Plumbing, one of the top plumbing companies in the area, and their plumbing services near me truly exceeded my expectations.",
                  rating: 5,
                  image: "/avatar2.jpg"
                },
                {
                  name: "Jack Smith",
                  location: "Toronto, Canada",
                  review: "RooterX Plumbing proved to be the best plumber I've worked with; their team was prompt, reliable, and ensured every plumbing repair was handled with expert care.",
                  rating: 5,
                  image: "/avatar3.jpg"
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-[20px] p-8 min-w-[350px] shadow-lg relative snap-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Quote icon */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#ffebeb] rounded-full flex items-center justify-center">
                    <span className="text-3xl text-[#dc3545]">"</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#ffc107] text-xl">★</span>
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-[#6c757d] mb-6 italic">"{review.review}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-bold text-[#212529]">{review.name}</p>
                      <p className="text-sm text-[#6c757d]">{review.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
                ←
              </button>
              <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Character Image */}
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-[30px] overflow-hidden shadow-2xl">
                <img
                  src="/plumber-character.png"
                  alt="RooterX Plumber Character"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              className="flex-1 bg-white rounded-[30px] shadow-xl p-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4 text-[#212529]">Contact Us!</h2>
              <p className="text-[#6c757d] mb-8">
                A member of our team will be in touch shortly to confirm your contact details or address questions you may have.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#212529] mb-2">First name</label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#212529] mb-2">Last name</label>
                    <input
                      type="text"
                      placeholder="Last First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#212529] mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#212529] mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#212529] mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent">
                    <option>Select Service Type</option>
                    <option>Emergency Plumbing</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Repair</option>
                    <option>Leak Detection</option>
                    <option>Commercial Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#212529] mb-2">How can we help you?</label>
                  <textarea
                    placeholder="Type here..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#dc3545] hover:bg-[#bb2d3b] text-white py-4 rounded-full font-bold text-lg shadow-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="bg-[#dc3545] rounded-[30px] p-12 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Left Content */}
            <div className="flex-1 text-white z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Something needs to be repaired?<br />
                Call Us Now!
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <Link to="/contact">
                  <Button className="bg-white text-[#dc3545] hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg">
                    Request Service Now →
                  </Button>
                </Link>
                <a href="tel:+16048052105" className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <span className="text-xl font-bold">+1 (604) 805-2105</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative mt-8 lg:mt-0">
              <img
                src="/cta-plumber.png"
                alt="Professional plumber ready to help"
                className="rounded-[20px] w-full max-w-[400px] ml-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm transition-all">
      <button
        className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors rounded-xl ${
          isOpen ? "bg-gray-50" : "hover:bg-gray-50"
        }`}
        onClick={() => setIsOpen((o) => !o)}
      >
        <span
          className={`text-lg font-semibold transition-colors ${
            isOpen ? "text-[#dc3545]" : "text-[#212529]"
          }`}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-gray-400"
        >
          {/* Chevron Down SVG */}
          <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          maxHeight: isOpen ? 500 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          maxHeight: { duration: 0.3 },
          opacity: { duration: 0.2 },
        }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-[#6c757d] leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};