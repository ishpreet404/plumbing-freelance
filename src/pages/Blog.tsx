import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, UserIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export const Blog = (): JSX.Element => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Signs You Need Emergency Plumbing Service",
      excerpt: "Learn to recognize the warning signs that indicate you need immediate professional plumbing help.",
      author: "Toronto Plumbing Team",
      date: "January 15, 2025",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "How to Prevent Frozen Pipes in Winter",
      excerpt: "Essential tips to protect your plumbing system during Toronto's harsh winter months.",
      author: "Toronto Plumbing Team",
      date: "January 10, 2025",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Water Heater Maintenance: A Complete Guide",
      excerpt: "Keep your water heater running efficiently with these professional maintenance tips.",
      author: "Toronto Plumbing Team",
      date: "January 5, 2025",
      image: "https://images.pexels.com/photos/8293742/pexels-photo-8293742.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Common Drain Problems and Solutions",
      excerpt: "Identify and understand common drain issues before they become major problems.",
      author: "Toronto Plumbing Team",
      date: "December 28, 2024",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Bathroom Renovation Plumbing Considerations",
      excerpt: "What you need to know about plumbing when planning your bathroom renovation.",
      author: "Toronto Plumbing Team",
      date: "December 20, 2024",
      image: "https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Energy-Efficient Plumbing Upgrades",
      excerpt: "Save money and reduce your environmental impact with these plumbing upgrades.",
      author: "Toronto Plumbing Team",
      date: "December 15, 2024",
      image: "https://images.pexels.com/photos/8293761/pexels-photo-8293761.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-black mb-8 font-['Satoshi-Black',Helvetica]">
            Plumbing Tips & Insights
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Stay informed with the latest plumbing tips, maintenance advice, and industry insights from our expert team
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-80 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-10">
              <div className="text-sm text-[#2585b8] font-black mb-4 tracking-wider">FEATURED POST</div>
              <h2 className="text-4xl font-black mb-6 font-['Satoshi-Black',Helvetica]">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <UserIcon className="w-5 h-5 mr-2" />
                <span className="mr-6 font-bold">{blogPosts[0].author}</span>
                <CalendarIcon className="w-5 h-5 mr-2" />
                <span className="font-bold">{blogPosts[0].date}</span>
              </div>
              <Button className="bg-[#2585b8] hover:bg-[#1e6b96] text-white h-14 px-8 rounded-xl font-black text-lg">
                Read More
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4 hover:text-[#2585b8] transition-colors font-['Satoshi-Black',Helvetica]">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span className="mr-4 font-bold">{post.author}</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span className="font-bold">{post.date}</span>
                </div>
                <Button variant="outline" className="w-full h-12 border-2 border-[#2585b8] text-[#2585b8] hover:bg-[#2585b8] hover:text-white font-black rounded-xl">
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#2585b8] rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-black mb-6 font-['Satoshi-Black',Helvetica]">Stay Updated</h2>
          <p className="text-2xl mb-10">Subscribe to our newsletter for the latest plumbing tips and special offers</p>
          <div className="max-w-lg mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg"
            />
            <Button className="bg-[#ee1c32] hover:bg-[#d91828] text-white px-10 h-14 rounded-xl font-black text-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};