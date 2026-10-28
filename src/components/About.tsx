import Section from "./Section";

const About = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "Firebase"],
  };

  return (
    <Section id="about" className="border-t border-border">
      <div className="space-y-16">
        <div>
          <p className="section-kicker">01 / About</p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight">About Me</h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            I’m a full-stack developer who turns complex product ideas into
            reliable, user-focused web applications. I work across React,
            TypeScript, Node.js, and modern databases, with hands-on
            experience building AI-powered tools, real-time collaboration
            features, and responsive interfaces. I care about clean
            architecture, thoughtful UX, and shipping maintainable software,
            and I’m eager to contribute, learn quickly, and grow with a strong
            engineering team.
          </p>
        </div>

        <div>
          <p className="section-kicker">02 / Toolkit</p>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">Skills</h2>
          <div className="divide-y divide-border border-y border-border">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="grid gap-3 py-5 sm:grid-cols-[130px_1fr]">
                <h3 className="text-sm font-medium">{category}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{items.join("  ·  ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
