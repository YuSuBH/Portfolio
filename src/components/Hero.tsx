import Section from "./Section";
import { ArrowRight, Github, Linkedin, CodeXml } from "lucide-react";

const Hero = () => {
  return (
    <Section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-8xl mx-auto">
        <div className="text-left">
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

          <div className="flex gap-6 mt-10 text-gray-500">
            <a
              href="https://github.com/YuSuBH"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-black transition-colors"
            >
              <Github size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-suhail-1b5009301/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-black transition-colors"
            >
              <Linkedin size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            <a
              href="https://leetcode.com/u/YSuhail/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-black transition-colors"
            >
              <CodeXml size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
                LeetCode
              </span>
            </a>
          </div>
        </div>

        <div className="relative h-full min-h-[400px] w-full hidden md:block rounded-2xl overflow-hidden shadow-2xl grayscale transition-all duration-500 hover:grayscale-0">
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop"
            alt="Programming Code"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
