import React from "react";
import Section from "./Section";

const About = () => {
  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    Backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Firebase"],
  };

  return (
    <Section id="about" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I am a passionate developer who enjoys building modern web
            applications and learning new things every day. Learning new
            technologies and continuously improving my skills to deliver
            high-quality solutions.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight mb-6">
              Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold">
                  BE in Computer Science
                </h4>
                <p className="text-gray-500">KVGCE, Sullia (2023-2027)</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">PUC</h4>
                <p className="text-gray-500">NMPUC, Sullia (2021-2023)</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold tracking-tighter mb-8 md:mb-12">
            Skills
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.Frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.Backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium"
                  >
                    {skill}
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
