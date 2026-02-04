import { ExternalLink, Github, Cpu, Smartphone, Brain, Globe, ShoppingBag } from "lucide-react";

const projects = [
  {
    title: "Industrial IoT Platform",
    description:
      "Production telemetry platform for monitoring industrial equipment. Real-time sensor data visualization, alerts, and analytics dashboard.",
    icon: Cpu,
    tags: ["IoT", "React", "Node.js", "MQTT", "PostgreSQL"],
    featured: true,
    link: "https://garud.cloud",
  },
  {
    title: "FitLife",
    description:
      "Android fitness tracking application with workout plans, progress tracking, and health metrics visualization.",
    icon: Smartphone,
    tags: ["Android", "Kotlin", "Firebase", "Material Design"],
    github: "#",
  },
  {
    title: "Diabetes Prediction ML",
    description:
      "Machine learning project for diabetes risk prediction using patient health data and various classification algorithms.",
    icon: Brain,
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    github: "#",
  },
  {
    title: "Web Practice Projects",
    description:
      "Collection of web development exercises including responsive layouts, API integrations, and React components.",
    icon: Globe,
    tags: ["React", "TypeScript", "CSS", "APIs"],
    github: "#",
  },
  {
    title: "Shopify Development",
    description:
      "E-commerce customization and theme development work for various Shopify stores.",
    icon: ShoppingBag,
    tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
  },
];

export function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From IoT platforms to mobile apps — building solutions that solve real problems
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-8">
            <div className="glass-card p-6 md:p-8 glow-effect card-hover">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <featuredProject.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        Featured Project
                      </span>
                      <h3 className="text-xl font-bold mt-1">
                        {featuredProject.title}
                      </h3>
                    </div>
                    {featuredProject.link && (
                      <a
                        href={featuredProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {otherProjects.map((project, index) => (
            <div key={index} className="glass-card p-5 card-hover group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <project.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded"
                  >
                    {tag}
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
