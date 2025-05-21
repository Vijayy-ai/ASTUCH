'use client';

import React, { useState } from 'react';
import { motion } from '@/utils/motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Define tool item type
type ToolItem = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  href: string;
  demoUrl: string;
};

// Define tool categories
type ToolCategory = 'NLP Tools' | 'Vision Tools' | 'Data Tools';

// Define tools data type
type ToolsDataType = {
  [key in ToolCategory]: ToolItem[];
};

// Sample tools data with categories
const toolsData: ToolsDataType = {
  'NLP Tools': [
    {
      id: 1,
      title: 'AI Text Generator',
      description: 'Generate human-like text for various applications with our advanced NLP model.',
      imageSrc: '/images/tools/text-generator.jpg',
      tags: ['NLP', 'Text Generation'],
      href: '/tools/ai-text-generator',
      demoUrl: 'https://demo.astuch.com/ai-text-generator',
    },
    {
      id: 2,
      title: 'Sentiment Analyzer',
      description: 'Analyze the sentiment of text content to understand emotional tone and user feedback.',
      imageSrc: '/images/tools/sentiment-analyzer.jpg',
      tags: ['NLP', 'Sentiment Analysis'],
      href: '/tools/sentiment-analyzer',
      demoUrl: 'https://demo.astuch.com/sentiment-analyzer',
    },
    {
      id: 3,
      title: 'Translation Assistant',
      description: 'Translate text between multiple languages with high accuracy and natural phrasing.',
      imageSrc: '/images/tools/translation-assistant.jpg',
      tags: ['NLP', 'Translation'],
      href: '/tools/translation-assistant',
      demoUrl: 'https://demo.astuch.com/translation-assistant',
    },
  ],
  'Vision Tools': [
    {
      id: 4,
      title: 'Image Analyzer',
      description: 'Analyze images to detect objects, faces, and extract valuable insights.',
      imageSrc: '/images/tools/image-analyzer.jpg',
      tags: ['Computer Vision', 'Image Processing'],
      href: '/tools/image-analyzer',
      demoUrl: 'https://demo.astuch.com/image-analyzer',
    },
    {
      id: 5,
      title: 'Object Detector',
      description: 'Detect and classify objects in images and videos with high accuracy.',
      imageSrc: '/images/tools/object-detector.jpg',
      tags: ['Computer Vision', 'Object Detection'],
      href: '/tools/object-detector',
      demoUrl: 'https://demo.astuch.com/object-detector',
    },
  ],
  'Data Tools': [
    {
      id: 6,
      title: 'Data Visualizer',
      description: 'Transform complex data into beautiful, interactive visualizations.',
      imageSrc: '/images/tools/data-visualizer.jpg',
      tags: ['Data Science', 'Visualization'],
      href: '/tools/data-visualizer',
      demoUrl: 'https://demo.astuch.com/data-visualizer',
    },
    {
      id: 7,
      title: 'Predictive Analytics',
      description: 'Make data-driven predictions using advanced machine learning algorithms.',
      imageSrc: '/images/tools/predictive-analytics.jpg',
      tags: ['Data Science', 'Machine Learning'],
      href: '/tools/predictive-analytics',
      demoUrl: 'https://demo.astuch.com/predictive-analytics',
    },
  ],
};

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | null>(null);
  
  const allCategories = Object.keys(toolsData) as ToolCategory[];
  
  const filteredTools = activeCategory 
    ? { [activeCategory]: toolsData[activeCategory] } as ToolsDataType
    : toolsData;

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
              Our Tools
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our collection of powerful tools to enhance your productivity and solve complex problems
            </motion.p>
          </div>
        </div>
      </section>

      <Section className="py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors`}
          >
            All Categories
          </button>
          
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools by Category */}
        {Object.entries(filteredTools).map(([category, tools], categoryIndex) => (
          <motion.div 
            key={category}
            className="mb-16 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">{category}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {tools.map((tool, toolIndex) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: toolIndex * 0.1 + 0.2 }}
                >
                  <Card 
                    title={tool.title}
                    description={tool.description}
                    imageSrc={tool.imageSrc}
                    href={tool.href}
                    tags={tool.tags}
                    className="h-full flex flex-col"
                  >
                    <div className="mt-auto pt-4 flex flex-wrap gap-2 justify-between items-center">
                      <Button 
                        href={tool.href} 
                        variant="primary" 
                        className="text-sm px-4 py-2"
                      >
                        Learn More
                      </Button>
                      <Button 
                        href={tool.demoUrl} 
                        variant="secondary" 
                        className="text-sm px-4 py-2"
                      >
                        Try Demo
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </Section>

      {/* Support & Documentation Section */}
      <Section backgroundColor="light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Support & Documentation</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the most out of our tools with comprehensive documentation, tutorials, and support resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/documentation" 
              variant="primary"
              className="w-full sm:w-auto"
            >
              Read Documentation
            </Button>
            <Button 
              href="/support" 
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Get Support
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
} 