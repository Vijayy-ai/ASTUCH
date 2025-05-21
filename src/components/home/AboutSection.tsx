'use client';

import React from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';

const AboutSection = () => {
  return (
    <Section backgroundColor="light" id="about" className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 px-4">
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-5 md:mb-6">About ASTUCH</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6">
            ASTUCH is a dynamic software company based in Jaipur, Rajasthan, dedicated to creating innovative digital solutions across multiple technology domains that solve real-world problems.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6">
            Our diverse team combines expertise in web and mobile development, UI/UX design, cloud architecture, data engineering, AI/ML, blockchain, and IoT to build powerful systems that drive meaningful outcomes for businesses of all sizes.
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            We&apos;re passionate about nurturing the next generation of tech talent through our comprehensive internship programs, providing hands-on experience with cutting-edge technologies across different specializations.
          </p>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center">
              <div className="text-blue-600 font-bold text-3xl md:text-4xl mb-1 md:mb-2">25+</div>
              <div className="text-gray-600 text-sm sm:text-base">Software Projects</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center">
              <div className="text-blue-600 font-bold text-3xl md:text-4xl mb-1 md:mb-2">15+</div>
              <div className="text-gray-600 text-sm sm:text-base">Tech Specialties</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center">
              <div className="text-blue-600 font-bold text-3xl md:text-4xl mb-1 md:mb-2">100+</div>
              <div className="text-gray-600 text-sm sm:text-base">Students Trained</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center">
              <div className="text-blue-600 font-bold text-3xl md:text-4xl mb-1 md:mb-2">5+</div>
              <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection; 