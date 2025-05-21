'use client';

import React from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

const InternshipPromo = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-20"></div>

      {/* Decorative elements with subtle animation */}
      <motion.div
        className="absolute top-10 left-5 w-24 h-24 rounded-full bg-blue-400 opacity-20 blur-xl hidden md:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-5 w-36 h-36 rounded-full bg-indigo-400 opacity-20 blur-xl hidden md:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Launch Your Tech Career With Us</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
              Join our internship program and work on real projects in web development, mobile apps, UI/UX design, data science, and more. Gain hands-on experience in your chosen field and build your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 mb-6 md:mb-8 justify-center md:justify-start">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">Multiple tech specializations</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">Expert mentorship</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">Flexible remote options</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button 
                href="/internship" 
                variant="secondary"
                className="font-semibold text-blue-800 px-6 py-3"
              >
                Explore Opportunities
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-64 sm:h-80 w-full">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <img
                src="/images/internship-success-illustration.svg"
                alt="Internship Opportunities"
                className="w-full h-full object-contain relative z-10"
                style={{ filter: "drop-shadow(0px 5px 15px rgba(59, 130, 246, 0.5))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPromo; 