'use client';

import React, { useState } from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Automated Content Analyzer',
    description: 'An AI system that analyzes content for sentiment, topics, and key insights using advanced NLP techniques.',
    imageSrc: '/images/projects/content-analyzer.jpg',
    tags: ['NLP', 'Sentiment Analysis', 'Machine Learning'],
    href: '/projects/content-analyzer',
  },
  {
    id: 2,
    title: 'Smart Surveillance System',
    description: 'Computer vision-based surveillance system that can detect unusual activities and provide real-time alerts.',
    imageSrc: '/images/projects/surveillance.jpg',
    tags: ['Computer Vision', 'Real-time Processing', 'Security'],
    href: '/projects/surveillance',
  },
  {
    id: 3,
    title: 'Predictive Maintenance Platform',
    description: 'ML solution that predicts equipment failures before they occur by analyzing sensor data patterns.',
    imageSrc: '/images/projects/predictive-maintenance.jpg',
    tags: ['Machine Learning', 'IoT', 'Time Series Analysis'],
    href: '/projects/predictive-maintenance',
  },
  {
    id: 4,
    title: 'Voice-Controlled Assistant',
    description: 'Custom voice assistant with natural language understanding for hands-free control of applications.',
    imageSrc: '/images/projects/voice-assistant.jpg',
    tags: ['NLP', 'Voice Recognition', 'Assistant'],
    href: '/projects/voice-assistant',
  },
  {
    id: 5,
    title: 'Recommendation Engine',
    description: 'Personalized recommendation system for e-commerce platforms based on user behavior and preferences.',
    imageSrc: '/images/projects/recommendation.jpg',
    tags: ['Machine Learning', 'Recommendation Systems', 'E-commerce'],
    href: '/projects/recommendation',
  },
  {
    id: 6,
    title: 'Automated Document Processing',
    description: 'AI solution that extracts, categorizes, and processes information from various document types.',
    imageSrc: '/images/projects/document-processing.jpg',
    tags: ['NLP', 'OCR', 'Document Analysis'],
    href: '/projects/document-processing',
  },
];

// All unique tags for filtering
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const filteredProjects = projects.filter(project => {
    // Filter by search query
    const matchesQuery = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by selected tags
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => project.tags.includes(tag));
    
    return matchesQuery && matchesTags;
  });

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 md:py-20 overflow-hidden">
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
              Our Projects
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our innovative projects that solve real-world problems and drive business value
            </motion.p>
          </div>
        </div>
      </section>

      <Section className="py-12">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="md:w-2/3">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="md:w-1/3">
              <div className="p-3 border border-gray-300 rounded-md bg-gray-50 h-full flex items-center justify-center">
                <span className="text-gray-700">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-gray-700 font-semibold my-2">Filter by:</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                href={project.href}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </Section>
    </>
  );
} 