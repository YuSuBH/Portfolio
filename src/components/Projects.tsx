import Section from "./Section";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OneCon",
      description:
        "OneCon is a powerful tool designed to streamline the process of creating and managing AI-powered websites. Includes features like live preview, live manual edit, instant publish and more.",
      tech: [
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Node.js",
        "Express",
        "Better Auth",
      ],
      live: "https://one-con.vercel.app/",
      github: "https://github.com/YuSuBH/OneCon",
      image: "/onecon.webp",
    },
    {
      title: "Collabo",
      description:
        "Collabo is a real-time collaborative coding platform enabling multi-user code editing, live presence and cursor tracking, AI-assisted debugging, multi-language code execution, role-based access control, and in-room chat, built with React, TypeScript, Node.js, Yjs, and Monaco Editor.",
      tech: ["React", "Gemini API", "Node.js", "Yjs", "Monaco Editor"],
      live: "https://collabo.yusufsuhail.tech/",
      github: "https://github.com/YuSuBH/Collabo",
      image: "/collabo.webp",
    },
    {
      title: "imAIger",
      description:
        "An image editing application powered by AI where you ask to generate image or edit image. All happening in a single interface where the AI understands your query and responds with appropriate result.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
      live: "https://im-a-iger.vercel.app/",
      github: "https://github.com/YuSuBH/imAIger",
      image: "/imaiger.webp",
    },
    {
      title: "BlogSpot",
      description:
        "Twitter-like social platform allowing users to post messages, like, and comment on posts. Simple and responsive UI secured by google oauth.",
      tech: ["React", "Firebase", "Google OAuth"],
      live: "https://react-sm-d160d.web.app/",
      github: "https://github.com/YuSuBH/BlogSpot",
      image: "/blogspot.webp",
    },
  ];

  return (
    <Section id="projects" className="border-t border-border">
      <p className="section-kicker">03 / Selected work</p>
      <h2 className="mb-10 text-3xl font-semibold tracking-tight">Projects</h2>
      <div className="grid gap-x-8 gap-y-10 border-y border-border py-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="group flex flex-col">
            <div className="aspect-4/3 overflow-hidden rounded-lg border border-border bg-muted">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
              ) : null}
            </div>
            <div className="pt-5">
              <h3 className="mb-3 text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mb-5 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-x-3 gap-y-1">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium hover:text-muted-foreground transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium hover:text-muted-foreground transition-colors"
                >
                  GitHub <Github size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
