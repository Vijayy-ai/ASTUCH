'use client';

import React from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

// Internship types
const internshipTypes = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Work on model development, training, and optimization for various AI applications.',
    icon: '/images/internship/ml-icon.svg',
    skills: ['Python', 'TensorFlow/PyTorch', 'Data Science', 'Statistics'],
  },
  {
    id: 2,
    title: 'Web & App Development',
    description: 'Build modern interfaces for AI applications using the latest frameworks and tools.',
    icon: '/images/internship/web-icon.svg',
    skills: ['React/Next.js', 'Node.js', 'UI/UX', 'API Development'],
  },
  {
    id: 3,
    title: 'Computer Vision',
    description: 'Develop image and video processing solutions for real-world applications.',
    icon: '/images/internship/vision-icon.svg',
    skills: ['OpenCV', 'Python', 'Deep Learning', 'Image Processing'],
  },
  {
    id: 4,
    title: 'Natural Language Processing',
    description: 'Create text analysis, generation, and understanding systems using NLP techniques.',
    icon: '/images/internship/nlp-icon.svg',
    skills: ['BERT/GPT', 'Python', 'Linguistics', 'Text Analysis'],
  },
];

// Application steps
const applicationSteps = [
  {
    id: 1,
    title: 'Submit Application',
    description: 'Fill out our online application form with your details, resume, and area of interest.',
    icon: '1',
  },
  {
    id: 2,
    title: 'Initial Screening',
    description: 'Our team will review your application and assess your skills and experience.',
    icon: '2',
  },
  {
    id: 3,
    title: 'Technical Assignment',
    description: 'Complete a small project or assignment related to your area of interest.',
    icon: '3',
  },
  {
    id: 4,
    title: 'Interview',
    description: 'Virtual interview with our team to discuss your background, skills, and goals.',
    icon: '4',
  },
  {
    id: 5,
    title: 'Offer & Onboarding',
    description: 'If selected, you&apos;ll receive an offer and begin the onboarding process.',
    icon: '5',
  },
];

// Benefits
const benefits = [
  "Work on real AI projects with business impact",
  "Mentorship from industry experts",
  "Flexible remote/hybrid options",
  "Certificate upon completion",
  "Opportunity for full-time roles",
  "Networking with industry professionals",
  "Build an impressive portfolio",
  "Learn cutting-edge technologies",
];

export default function InternshipPage() {
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
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Start Your Tech Career With Us
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Join our internship program to gain hands-on experience in technology development, collaborate with experienced professionals, and build your career in the tech industry.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  href="#apply-now" 
                  variant="secondary"
                  className="font-semibold text-blue-800"
                >
                  Apply Now
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full md:w-1/2 mt-6 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-64 sm:h-80 md:h-auto">
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
                <img
                  src="/images/internship/hero-image.svg"
                  alt="ASTUCH Internship"
                  className="w-full h-full object-contain relative z-10"
                  style={{ filter: "drop-shadow(0px 5px 15px rgba(59, 130, 246, 0.5))" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Intern With Us */}
      <Section id="why-join">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Intern With Us</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our internship program is designed to provide valuable experience while building your skills in technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-800">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Internship Types */}
      <Section backgroundColor="light" id="internship-types">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Internship Types</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the area that matches your interests and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internshipTypes.map((type, index) => (
            <motion.div 
              key={type.id}
              className="bg-white p-8 rounded-lg shadow-md flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <img src={type.icon} alt={type.title} className="w-8 h-8" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {type.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Application Process */}
      <Section id="application-process">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Application Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined application process is designed to find the best match for both you and our team
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {applicationSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="flex mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mr-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.icon}
                </div>
                {index < applicationSteps.length - 1 && (
                  <div className="w-0.5 h-16 bg-blue-600 mx-auto mt-2"></div>
                )}
              </div>
              
              <div className="pt-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Apply Now Form */}
      <Section backgroundColor="light" id="apply-now">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to start your application
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your last name"
                  />
                </div>
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
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="internshipType" className="block text-gray-700 font-medium mb-2">Internship Type</label>
                <select 
                  id="internshipType" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an internship type</option>
                  {internshipTypes.map(type => (
                    <option key={type.id} value={type.title}>{type.title}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">Resume/CV</label>
                <input 
                  type="file" 
                  id="resume" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF format preferred)</p>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why do you want to join our internship program?</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your motivation and goals"
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  variant="primary"
                  className="w-full"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What is the duration of the internship?</h3>
              <p className="text-gray-600">Our internships typically last 3-6 months, depending on the program and your availability.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is the internship paid?</h3>
              <p className="text-gray-600">Yes, we offer stipends for all our internships based on your skills and the position.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Are internships remote or in-office?</h3>
              <p className="text-gray-600">We offer both remote and hybrid options. For local candidates, we encourage some in-office time at our Jaipur location.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What qualifications do I need?</h3>
              <p className="text-gray-600">Requirements vary by position, but generally we look for students or recent graduates with relevant coursework and basic skills in the internship area.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Will I receive a certificate?</h3>
              <p className="text-gray-600">Yes, all interns receive a certificate upon successful completion of the program.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 