'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ToolsShowcase from '@/components/home/ToolsShowcase';
import InternshipPromo from '@/components/home/InternshipPromo';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ToolsShowcase />
      <InternshipPromo />
      <Testimonials />
    </>
  );
}
