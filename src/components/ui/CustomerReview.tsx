import { motion } from 'framer-motion';
import { useState } from 'react';

const CustomerReviews = () => {
const reviews = [
{
name: "Jack Smith",
location: "Toronto, Canada",
review: "I needed urgent plumbing repair and after searching for plumbers near me, I found RooterX Plumbing—they delivered exceptional plumbing services with speed and professionalism.",
rating: 5,
image: "/public/profile-1.png"
},
{
name: "Jane Doe",
location: "New York, USA",
review: "When my sink started leaking, I contacted RooterX Plumbing, one of the top plumbing companies in the area, and their plumbing services near me truly exceeded my expectations.",
rating: 5,
image: "/public/profile-1.png"
},
{
name: "Alex Brown",
location: "London, UK",
review: "RooterX Plumbing proved to be the best plumber I've worked with; their team was prompt, reliable, and ensured every plumbing repair was handled with expert care.",
rating: 5,
image: "/public/profile-1.png"
},
{
name: "Jack Smith",
location: "Toronto, Canada",
review: "I needed urgent plumbing repair and after searching for plumbers near me, I found RooterX Plumbing—they delivered exceptional plumbing services with speed and professionalism.",
rating: 5,
image: "/public/profile-1.png"
},
{
name: "Jane Doe",
location: "New York, USA",
review: "When my sink started leaking, I contacted RooterX Plumbing, one of the top plumbing companies in the area, and their plumbing services near me truly exceeded my expectations.",
rating: 5,
image: "/public/profile-1.png"
},
{
name: "Jack Smith",
location: "Toronto, Canada",
review: "I needed urgent plumbing repair and after searching for plumbers near me, I found RooterX Plumbing—they delivered exceptional plumbing services with speed and professionalism.",
rating: 5,
image: "/public/profile-1.png"
},
{
name: "Jane Doe",
location: "New York, USA",
review: "When my sink started leaking, I contacted RooterX Plumbing, one of the top plumbing companies in the area, and their plumbing services near me truly exceeded my expectations.",
rating: 5,
image: "/public/profile-1.png"
},
];

const [currentIndex, setCurrentIndex] = useState(0);

const handlePrev = () => {
setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
};

const handleNext = () => {
setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
};

return (
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

    <div className="relative ">

      <div

        className="flex transition-transform ease-in-out duration-300"

        style={{

          transform: `translateX(-${currentIndex * (100 / reviews.length)}%)`,

          width: `${reviews.length * (100 / 3)}%`

        }}

      >

        {reviews.map((review, index) => (

          <motion.div

            key={index}

            className="bg-white rounded-[20px] p-8 w-1/3 shadow-lg relative mx-2"

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: index * 0.1 }}

          >

            <div className="absolute -top-10 w-16 h-16 bg-[#ffebeb] rounded-full flex items-center justify-center">

              <img src="https://rooterx.ca/assets/img/index/icon/ico-param.png" alt="quote icon" className="w-8 h-8 p-2" />

            </div>


            <div className="flex gap-1 mb-4">

              {[...Array(review.rating)].map((_, i) => (

                <span key={i} className="text-[#ffc107] text-xl">★</span>

              ))}

            </div>


            <p className="text-[#6c757d] mb-6 italic">"{review.review}"</p>


            <div className="flex items-center gap-4">

              <img src={review.image} alt="avatar" className="w-12 h-12 rounded-full object-cover" />

              <div>

                <p className="font-bold text-[#212529]">{review.name}</p>

                <p className="text-sm text-[#6c757d]">{review.location}</p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>


      <div className="flex justify-center gap-4 mt-8">

        <button onClick={handlePrev} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">

          ←

        </button>

        <button onClick={handleNext} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">

          →

        </button>

      </div>

    </div>

  </div>

</section>

);
};

export default CustomerReviews;