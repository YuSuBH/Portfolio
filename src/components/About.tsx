import Section from "./Section";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiFirebase,
} from "react-icons/si";

const About = () => {
  const skills = {
    Frontend: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    Backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "Firebase", icon: SiFirebase },
    ],
  };

  return (
    <Section id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="space-y-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tighter mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            I am a passionate developer who enjoys building modern web
            applications and learning new things every day. Learning new
            technologies and continuously improving my skills to deliver
            high-quality solutions.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold tracking-tighter mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.Frontend.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium"
                  >
                    <skill.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.Backend.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium"
                  >
                    <skill.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
