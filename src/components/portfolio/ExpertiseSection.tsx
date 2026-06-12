const skillGroups = [
  {
    label: "production stack",
    skills: [
      "NodeJS",
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "MQTT/MQTTS",
      "ThingsBoard",
      "Nginx",
      "GitHub Actions CI/CD",
      "JWT/RBAC",
      "Shopify Liquid",
      "Express.js",
      "Cloudinary",
      "Nodemailer",
    ],
  },
  {
    label: "also worked with",
    skills: [
      "ONNX Runtime",
      "RAG",
      "Groq API",
      "MCP Server",
      "scikit-learn",
      "Kotlin",
      "Jetpack Compose",
    ],
  },
];

export function ExpertiseSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">Skills</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="portfolio-card p-6">
              <p className="mb-5 font-mono text-xs font-medium text-primary">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

