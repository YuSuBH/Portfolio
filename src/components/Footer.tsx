import React from "react";
import { Github } from "lucide-react";

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
            className="hover:text-gray-300 transition-colors"
          >
            <Github size={20} />
          </a>
          {/* Add other links if available in content, otherwise generic or remove */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
