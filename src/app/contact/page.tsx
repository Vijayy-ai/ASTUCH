'use client';

import React from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <>
      <Section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
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
      
        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch with our team for any inquiries, collaborations, or support
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Connect With Us</h2>
            <p className="text-gray-600 mb-8">
              We&apos;re here to help! Visit our office or connect through social media.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Our Location</h3>
                  <address className="not-italic text-gray-600">
                    ASTUCH Headquarters<br />
                    123 Tech Park, C-Scheme<br />
                    Jaipur, Rajasthan 302001<br />
                    India
                  </address>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://linkedin.com/company/astuch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
              >
                <FaLinkedin className="text-blue-600" size={20} />
              </a>
              <a 
                href="https://github.com/astuch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
              >
                <FaGithub className="text-blue-600" size={20} />
              </a>
              <a 
                href="https://twitter.com/astuch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
              >
                <FaTwitter className="text-blue-600" size={20} />
              </a>
              <a 
                href="https://instagram.com/astuch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
              >
                <FaInstagram className="text-blue-600" size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section backgroundColor="light">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find Us</h2>
        <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
          {/* Google Map iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.95299537112!2d75.70272115644222!3d26.882106191465613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db38950a4e249%3A0x1fc26b936237b14c!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1627646954650!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="ASTUCH Location"
          ></iframe>
        </div>
      </Section>
    </>
  );
} 