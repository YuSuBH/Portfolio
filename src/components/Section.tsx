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
      className={`py-16 md:py-20 min-h-max relative ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-3xl container-padding ${classNameContainer}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
