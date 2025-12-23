import { Github, Linkedin, CodeXml } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto container-padding flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-2xl font-bold tracking-tighter">Yusuf Suhail</p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/YuSuBH"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hover:text-gray-300 transition-colors"
          >
            <Github size={20} />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/yusuf-suhail-1b5009301/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hover:text-gray-300 transition-colors"
          >
            <Linkedin size={20} />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
              LinkedIn
            </span>
          </a>
          <a
            href="https://leetcode.com/u/YSuhail/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hover:text-gray-300 transition-colors"
          >
            <CodeXml size={20} />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
              LeetCode
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
