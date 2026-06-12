import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  badge?: string;
};

const featuredProject = {
  title: "Garud IoT Platform",
  label: "featured / production",
  description:
    "Production telemetry platform for monitoring industrial devices and real-time sensor data. Secure device connectivity with mTLS, real-time dashboards, alerts, and automated deployments.",
  tags: ["NestJS", "React", "TypeScript", "PostgreSQL", "ThingsBoard", "MQTT", "Docker"],
  link: "https://garud.cloud",
};

const projects: Project[] = [
  {
    title: "Diabetes Prediction + RAG AI",
    badge: "96.6% accuracy",
    description:
      "Random Forest model served via ONNX Runtime inside NestJS. RAG medical assistant over healthcare documents using Groq LLMs and local embeddings, with an MCP server integration for Claude Desktop.",
    tags: ["NestJS", "ONNX", "RAG", "Groq", "Prisma"],
    // TODO: Add real GitHub repo URL when this repository is public.
  },
  {
    title: "SecureAuth System",
    description:
      "Authentication system with JWT access/refresh rotation, role-based access control, password recovery, and Google reCAPTCHA v3.",
    tags: ["Express", "JWT", "PostgreSQL", "reCAPTCHA"],
    // TODO: Add real GitHub repo URL when this repository is public.
  },
  {
    title: "TaskBoard",
    description:
      "Full-stack Kanban task manager with drag-and-drop workflow, authentication, task assignment, and CRUD APIs.",
    tags: ["React", "Express", "PostgreSQL"],
    // TODO: Add real GitHub repo URL when this repository is public.
  },
  {
    title: "AI Client Inquiry System",
    description:
      "AI-powered inquiry management platform for intelligent customer query handling and routing.",
    tags: ["React", "Express", "PostgreSQL"],
    // TODO: Add real GitHub repo URL when this repository is public.
  },
  {
    title: "FitLife",
    description:
      "Native Android fitness app for workout tracking and goal management with SQLite persistence.",
    tags: ["Kotlin", "Jetpack Compose", "SQLite"],
    // TODO: Add real GitHub repo URL when this repository is public.
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>

        <article className="portfolio-card mb-6 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-medium text-primary">{featuredProject.label}</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">{featuredProject.title}</h3>
              <p className="mt-4 leading-7 text-[#d5d5d5]">{featuredProject.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Open Garud IoT Platform"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="portfolio-card flex min-h-[280px] flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.badge && (
                    <span className="mb-3 inline-flex rounded border border-primary px-2 py-1 font-mono text-[11px] text-primary">
                      {project.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-[#d5d5d5]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
