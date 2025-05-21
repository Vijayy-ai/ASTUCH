'use client';
import React from 'react';
import { motion } from '@/utils/motion';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 md:py-28 overflow-hidden">
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
      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-purple-400 opacity-10 blur-lg hidden md:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile-optimized layout with flex direction changes */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          {/* Text Content - Mobile first approach with stacked layout */}
          <div className="w-full md:w-3/5 lg:w-2/3 text-center md:text-left">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Transforming Ideas into <span className="text-cyan-300 inline-block relative">
                Digital Reality
                <motion.span 
                  className="absolute bottom-1 left-0 w-full h-1 bg-cyan-300 opacity-50"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                ></motion.span>
              </span> with Excellence
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              ASTUCH empowers businesses with next-generation technology solutions. We specialize in AI, cloud architecture, custom software development, and digital transformation strategies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                href="/tools"
                variant="secondary"
                className="font-semibold text-blue-800 bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                Explore Our Solutions
              </Button>
              <Button 
                href="/internship" 
                variant="primary" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 transition-colors duration-200"
              >
                Join Our Team
              </Button>
            </motion.div>
          </div>
          
          {/* Image/Illustration - Mobile optimized */}
          <motion.div 
            className="w-full md:w-2/5 lg:w-1/3 mt-4 md:mt-0 h-64 sm:h-80 md:h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative h-full w-full">
              {/* Enhanced glow effect for illustration */}
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
              {/* New 3D illustration with happy students */}
              <img
                src="/images/internship-success-illustration.svg" 
                alt="Happy students after successful internship" 
                className="w-full h-full object-contain relative z-10 transform hover:scale-105 transition-transform duration-500"
                style={{ filter: "drop-shadow(0px 5px 15px rgba(59, 130, 246, 0.5))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;