import { useState } from "react";
import Section from "./Section";
import { ArrowUpRight, Github, Linkedin, CodeXml } from "lucide-react";

const COLORS = [
  "#ff3366",
  "#00c878",
  "#d9a400",
  "#009dc2",
  "#e05252",
  "#c000c0",
  "#5b43c6",
];

const FONTS = [
  "Georgia, serif",
  "Courier New, monospace",
  "Trebuchet MS, sans-serif",
  "Verdana, sans-serif",
  "Palatino Linotype, serif",
];

const Hero = () => {
  const name = "Yusuf Suhail";
  const [letterStyles, setLetterStyles] = useState<
    { color: string; fontFamily: string }[]
  >(name.split("").map(() => ({ color: "inherit", fontFamily: "inherit" })));

  const handleLetterHover = (index: number) => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const fontFamily = FONTS[Math.floor(Math.random() * FONTS.length)];

    setLetterStyles((previous) => {
      const next = [...previous];
      next[index] = { color, fontFamily };
      return next;
    });
  };

  const handleLetterLeave = (index: number) => {
    setLetterStyles((previous) => {
      const next = [...previous];
      next[index] = { color: "inherit", fontFamily: "inherit" };
      return next;
    });
  };

  return (
    <Section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="w-full">
        <div className="text-left">
          <p className="mb-5 text-sm font-medium text-muted-foreground">Software developer</p>
          <h1 className="mb-7 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            {name.split("").map((letter, index) => (
              <span
                key={index}
                onMouseEnter={() => handleLetterHover(index)}
                onMouseLeave={() => handleLetterLeave(index)}
                className="inline-block cursor-default text-center align-top transition-[color,font-family] duration-200"
                style={{
                  ...letterStyles[index],
                  width:
                    letter === " "
                      ? "0.36em"
                      : ["i", "l"].includes(letter)
                        ? "0.48em"
                        : "0.62em",
                  lineHeight: "1.1",
                }}
              >
                {letter === " " ? "\u00a0" : letter}
              </span>
            ))}
          </h1>
          <p className="mb-9 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
            Building modern web experiences with a passion for clean design,
            efficient code, and continuous learning.
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium hover:border-muted-foreground hover:text-muted-foreground transition-colors"
            >
              View Work
              <ArrowUpRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
            >
              Get in Touch
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="mt-12 flex gap-5 text-muted-foreground">
            <a
              href="https://github.com/YuSuBH"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-suhail-1b5009301/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/YSuhail/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <CodeXml size={24} />
            </a>
          </div>
        </div>


      </div>
    </Section>
  );
};

export default Hero;
