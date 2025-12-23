import Section from "./Section";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
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
      title: "PlanTraverse",
      description:
        "A web based application to plan trips featuring map representing the locations. Also include a community map where users share their experiances of places they visited.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma ORM",
        "GitHub OAuth",
      ],
      live: "https://plan-traverse.vercel.app/",
      github: "https://github.com/YuSuBH/PlanTraverse",
      image: "/plantraverse.webp",
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
    {
      title: "CodeSync",
      description:
        "Collaborative code editor enabling multiple users to write and edit code simultaneously in shared rooms using Socket.io. Live compiler supporting 5 languages, user cursor tracking and unique color assignment for each participant.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Socket.io",
        "Monaco Editor",
      ],
      live: "https://codesync-ffe4.onrender.com/",
      github: "https://github.com/YuSuBH/CodeSync",
      image: "/codesync.webp",
    },
  ];

  return (
    <Section id="projects" className="bg-white dark:bg-black">
      <h2 className="text-4xl font-bold tracking-tighter mb-12">
        Selected Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-900"
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span className="text-gray-400 dark:text-gray-500 font-medium">
                  Project Image
                </span>
              )}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:underline decoration-2 underline-offset-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  Live Demo <ExternalLink size={16} className="ml-1" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  GitHub <Github size={16} className="ml-1" />
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
