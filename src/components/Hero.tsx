import { useState } from "react";
import Section from "./Section";
import { ArrowRight, Github, Linkedin, CodeXml } from "lucide-react";
import MatrixRain from "./MatrixRain";

const COLORS = [
  "#FF3366", // Hot pink
  "#00FF88", // Bright green
  "#FFEE00", // Bright yellow
  "#00D4FF", // Cyan
  "#FF6B6B", // Coral red
  "#FF00FF", // Magenta
  "#00FF00", // Lime
  "#FF9500", // Orange
  "#00FFFF", // Aqua
  "#FF4081", // Pink
  "#7C4DFF", // Bright purple
  "#FFFF00", // Yellow
  "#00E676", // Green
  "#FF5722", // Deep orange
  "#E040FB", // Purple
];

const FONTS = [
  "Georgia, serif",
  "Courier New, monospace",
  "Comic Sans MS, cursive",
  "Impact, sans-serif",
  "Trebuchet MS, sans-serif",
  "Verdana, sans-serif",
  "Lucida Console, monospace",
  "Palatino Linotype, serif",
  "Arial Black, sans-serif",
  "Times New Roman, serif",
];

const Hero = () => {
  const name = "Yusuf Suhail";
  const [letterStyles, setLetterStyles] = useState<
    { color: string; fontFamily: string }[]
  >(name.split("").map(() => ({ color: "inherit", fontFamily: "inherit" })));

  const handleLetterHover = (index: number) => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const randomFont = FONTS[Math.floor(Math.random() * FONTS.length)];

    setLetterStyles((prev) => {
      const newStyles = [...prev];
      newStyles[index] = { color: randomColor, fontFamily: randomFont };
      return newStyles;
    });
  };

  const handleLetterLeave = (index: number) => {
    setLetterStyles((prev) => {
      const newStyles = [...prev];
      newStyles[index] = { color: "inherit", fontFamily: "inherit" };
      return newStyles;
    });
  };

  return (
    <Section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16"
    >
      {/* Background: Matrix Rain + gradient mask for text legibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <MatrixRain />
        {/* Fade rain out on the left so text stays readable */}
        <div className="matrix-rain-mask" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            {name.split("").map((letter, index) => (
              <span
                key={index}
                onMouseEnter={() => handleLetterHover(index)}
                onMouseLeave={() => handleLetterLeave(index)}
                style={{
                  color: letterStyles[index].color,
                  fontFamily: letterStyles[index].fontFamily,
                  transition: "color 0.2s ease, font-family 0.5s ease",
                  cursor: "default",
                  display: "inline-block",
                  textAlign: "center",
                  width: [" ", "i", "l"].includes(letter) ? "0.3em" : "0.57em",
                  height: "1.2em",
                  lineHeight: "1.2em",
                  verticalAlign: "top",
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Building modern web experiences with a passion for clean design,
            efficient code, and continuous learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              View Work
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 dark:border-gray-700 text-black dark:text-white text-sm font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/YuSuBH"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-black dark:hover:text-white transition-colors"
            >
              <Github size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-suhail-1b5009301/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-black dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            <a
              href="https://leetcode.com/u/YSuhail/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-black dark:hover:text-white transition-colors"
            >
              <CodeXml size={24} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
                LeetCode
              </span>
            </a>
          </div>
        </div>


      </div>
    </Section>
  );
};

export default Hero;
