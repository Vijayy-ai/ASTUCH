'use client';

import React from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "Working with ASTUCH was an incredible experience. Their AI tools have transformed our business operations and significantly improved our efficiency.",
    name: "Priya Sharma",
    title: "CTO, TechInnovate",
    image: "/images/testimonials/person1.svg"
  },
  {
    id: 2,
    quote: "The internship at ASTUCH was the best learning experience of my career. I gained hands-on experience with cutting-edge AI technologies under expert guidance.",
    name: "Arjun Mehta",
    title: "Former Intern, Now ML Engineer",
    image: "/images/testimonials/person2.svg"
  },
  {
    id: 3,
    quote: "ASTUCH's data visualization tool completely changed how we understand and present our research findings. It's intuitive and incredibly powerful.",
    name: "Dr. Neha Kapoor",
    title: "Research Scientist, Data Insights",
    image: "/images/testimonials/person3.svg"
  }
];

const Testimonials = () => {
  return (
    <Section backgroundColor="light" id="testimonials" className="py-16 md:py-24">
      <div className="text-center mb-10 md:mb-14 px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What People Say
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hear from our clients, collaborators, and past interns
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id}
            className="bg-white p-5 md:p-8 rounded-lg shadow-md flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden mr-3 md:mr-4 flex-shrink-0 bg-blue-100 border border-blue-200 relative">
                {testimonial.image && (
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 768px) 48px, 56px"
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-700 italic text-sm sm:text-base">&ldquo;{testimonial.quote}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials; 