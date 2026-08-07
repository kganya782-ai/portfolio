import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  gridLines?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
  containerClassName = '',
  gridLines = true,
}) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 overflow-hidden border-b border-[#262626] ${className}`}
    >
      {/* Background Decorative Grid Overlay */}
      {gridLines && (
        <div className="absolute inset-0 pointer-events-none grid-bg" />
      )}

      {/* Main Responsive Container with Padding Math */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
