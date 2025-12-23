import React, { type ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  classNameContainer?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  classNameContainer = "",
}) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-24 min-h-max relative ${className}`}
    >
      <div
        className={`container mx-auto container-padding ${classNameContainer}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
