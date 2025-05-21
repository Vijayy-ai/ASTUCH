'use client';

import React from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const solutions = [
  {
    id: 1,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with the latest frameworks like React, Next.js and Node.js.',
    imageSrc: '/images/tools/web-development.svg',
    tags: ['React', 'Next.js', 'Node.js'],
    href: '/solutions/web-development',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    imageSrc: '/images/tools/mobile-development.svg',
    tags: ['Flutter', 'React Native', 'Swift'],
    href: '/solutions/mobile-development',
  },
  {
    id: 3,
    title: 'Data Analytics Solutions',
    description: 'Transform your data into actionable insights with our advanced analytics and visualization tools.',
    imageSrc: '/images/tools/data-analytics.svg',
    tags: ['Data Engineering', 'Analytics', 'Visualization'],
    href: '/solutions/data-analytics',
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to automate processes and gain competitive advantages.',
    imageSrc: '/images/tools/ai-solutions.svg',
    tags: ['ML Models', 'NLP', 'Computer Vision'],
    href: '/solutions/ai-machine-learning',
  },
  {
    id: 5,
    title: 'Cloud Computing',
    description: 'Scalable cloud solutions and infrastructure management services to optimize your operations.',
    imageSrc: '/images/tools/cloud-solutions.svg',
    tags: ['AWS', 'Azure', 'GCP'],
    href: '/solutions/cloud-computing',
  },
  {
    id: 6,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality for an exceptional user experience.',
    imageSrc: '/images/tools/ui-design.svg',
    tags: ['User Research', 'Wireframing', 'Prototyping'],
    href: '/solutions/ui-ux-design',
  },
];

const ToolsShowcase = () => {
  return (
    <Section id="solutions" className="py-16 md:py-24">
      <div className="text-center mb-10 md:mb-14">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Solutions
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our comprehensive range of technology solutions designed for businesses across all industries
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card 
              title={solution.title}
              description={solution.description}
              imageSrc={solution.imageSrc}
              href={solution.href}
              tags={solution.tags}
              className="h-full flex flex-col"
            />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-10 md:mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button href="/solutions" variant="primary" className="font-medium px-6 py-3">
          View All Solutions
        </Button>
      </motion.div>
    </Section>
  );
};

export default ToolsShowcase; 