'use client';

import React from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: 'Abhisekh Sharma',
    position: 'Founder & CEO',
    bio: 'Expert in AI and machine learning with over 10 years of experience leading tech teams.',
    image: '/images/team/abhisekh.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/abhisekhsharma',
      github: 'https://github.com/abhisekhsharma',
      twitter: 'https://twitter.com/abhisekhsharma',
    }
  },
  {
    id: 2,
    name: 'Rani Patel',
    position: 'CTO',
    bio: 'Full-stack developer and AI researcher specializing in natural language processing.',
    image: '/images/team/rani.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/Ranipatel',
    github: 'https://github.com/Ranipatel',
    }
  },
  {
    id: 3,
    name: 'Vikram Singh',
    position: 'Lead AI Engineer',
    bio: 'Computer vision expert with a background in robotics and deep learning.',
    image: '/images/team/vikram.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/vikramsingh',
      github: 'https://github.com/vikramsingh',
      twitter: 'https://twitter.com/vikramsingh',
    }
  },
  {
    id: 4,
    name: 'Ananya sharma',
    position: 'Product Manager',
    bio: 'Passionate about creating user-friendly AI products that solve real business problems.',
    image: '/images/team/ananya.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ananyagupta',
    }
  },
];

// Journey milestones
const journeyMilestones = [
  {
    id: 1,
    year: '2019',
    title: 'ASTUCH Founded',
    description: 'ASTUCH was founded in Jaipur with a vision to democratize AI technology.',
  },
  {
    id: 2,
    year: '2020',
    title: 'First AI Tools',
    description: 'Launched our first set of AI tools for text analysis and image processing.',
  },
  {
    id: 3,
    year: '2021',
    title: 'Internship Program',
    description: 'Started the internship program to nurture the next generation of AI talent.',
  },
  {
    id: 4,
    year: '2022',
    title: 'Expanded Team',
    description: 'Grew our team to 15+ professionals across AI, development, and design.',
  },
  {
    id: 5,
    year: '2023',
    title: 'Major Projects',
    description: 'Completed several major AI projects for clients across various industries.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
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
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About ASTUCH
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're a team dedicated to building innovative solutions that solve real business challenges
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              To make technology accessible and useful for businesses and organizations of all sizes, helping them solve complex problems and drive innovation.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              We believe that technology should be a tool for positive change, and we're committed to developing solutions that have a meaningful impact on our clients and the world.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              To be a leading innovator in the tech space, known for creating cutting-edge tools and solutions that transform industries and empower users.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              We envision a future where technology is seamlessly integrated into daily operations, making processes more efficient, decisions more informed, and outcomes more successful.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Our Journey */}
      <Section backgroundColor="light" id="journey">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The story of ASTUCH's growth and evolution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {journeyMilestones.map((milestone, index) => (
            <motion.div 
              key={milestone.id}
              className="flex mb-12 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mr-8 text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {milestone.year}
                </div>
                {index < journeyMilestones.length - 1 && (
                  <div className="w-0.5 h-16 bg-blue-600 mx-auto mt-2"></div>
                )}
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Approach */}
      <Section id="approach">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we solve problems and deliver results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Understand</h3>
            <p className="text-gray-600">
              We begin by deeply understanding the problem, conducting thorough research and analysis to identify the core challenges and opportunities.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovate</h3>
            <p className="text-gray-600">
              We leverage our expertise in AI, machine learning, and software development to design innovative solutions that address the specific needs and goals.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Implement</h3>
            <p className="text-gray-600">
              We build and deploy our solutions with a focus on quality, usability, and performance, ensuring they deliver real value and tangible results.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Team Section */}
      <Section backgroundColor="light" id="team">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals behind ASTUCH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-64 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                <div className="flex space-x-4">
                  {member.socialLinks.linkedin && (
                    <a 
                      href={member.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  
                  {member.socialLinks.github && (
                    <a 
                      href={member.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  
                  {member.socialLinks.twitter && (
                    <a 
                      href={member.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-400 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
} 