'use client';

import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'rounded-md font-medium px-6 py-3 transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button; 