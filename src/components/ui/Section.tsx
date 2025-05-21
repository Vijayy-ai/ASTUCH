'use client';

import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: 'white' | 'light' | 'dark' | 'blue';
};

const Section = ({
  children,
  className = '',
  id,
  backgroundColor = 'white',
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    blue: 'bg-blue-600 text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[backgroundColor]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section; 