import { Github, Linkedin, CodeXml } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-3xl flex-col justify-between gap-5 container-padding md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-tight">Yusuf Suhail</p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-5 text-muted-foreground">
          <a
            href="https://github.com/YuSuBH"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yusuf-suhail-1b5009301/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/YSuhail/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <CodeXml size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
