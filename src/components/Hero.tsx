import React from "react";
import Section from "./Section";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <Section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16"
    >
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
          Yusuf Suhail
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          Building modern web experiences with a passion for clean design,
          efficient code, and continuous learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            View Work
            <ArrowRight size={16} className="ml-2" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-black text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
