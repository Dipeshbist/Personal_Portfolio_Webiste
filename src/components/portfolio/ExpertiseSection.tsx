import { Cpu, Server, Layout, GitBranch } from "lucide-react";

const expertiseItems = [
  {
    icon: Cpu,
    title: "IoT Systems",
    description: "Device integration, telemetry, MQTT protocols, sensor data processing",
    technologies: ["MQTT", "Sensors", "Telemetry", "Edge Computing"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "RESTful APIs, database design, authentication, cloud deployment",
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Responsive dashboards, data visualization, real-time updates",
    technologies: ["React", "TypeScript", "Tailwind", "Chart.js"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Architecture",
    description: "CI/CD pipelines, containerization, system design, cloud hosting",
    technologies: ["Docker", "AWS", "Git", "Linux"],
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Focused on building scalable IoT solutions with modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
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
