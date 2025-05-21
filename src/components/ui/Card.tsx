'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  href?: string;
  tags?: string[];
  className?: string;
};

const Card = ({
  title,
  description,
  imageSrc,
  href,
  tags = [],
  className = '',
}: CardProps) => {
  const cardContent = (
    <>
      {imageSrc && (
        <div className="relative h-40 sm:h-48 w-full mb-4 overflow-hidden rounded-t-lg">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        </div>
      )}
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full truncate"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-sm sm:text-base text-gray-600 mb-4">{description}</p>
      </div>
    </>
  );

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group flex flex-col h-full ${className}`}>
      {href ? (
        <Link href={href} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default Card; 