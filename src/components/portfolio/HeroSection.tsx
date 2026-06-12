import { Download, Github, Linkedin, Mail } from "lucide-react";

const heroTech = ["NestJS", "ExpressJS", "React", "TypeScript", "PostgreSQL", "Prisma", "Shopify", "MQTT", "Docker"];

export function HeroSection() {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="home" className="pt-24 pb-16 md:pt-28">
      <div className="section-container">
        <div className="grid gap-12 md:grid-cols-[minmax(0,640px)_1fr] md:items-start">
          <div>
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-normal text-primary">
              kathmandu, nepal
            </p>
            <h1 className="text-[34px] font-semibold leading-tight tracking-normal text-foreground md:text-5xl">
              Dipesh Bist
            </h1>
            <p className="mt-3 text-lg font-medium text-primary">
              Full Stack Developer
            </p>
            <p className="mt-6 max-w-[640px] text-base leading-7 text-[#d5d5d5]">
              I build and maintain production IoT platforms, AI-powered
              applications, and enterprise web systems at Nepal Digital Systems.
              I work across the full stack, from NestJS APIs and PostgreSQL
              databases to React dashboards and Docker deployments.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroTech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={resumeHref}
                download
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="https://github.com/Dipeshbist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dipesh-bist-2a86b4282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dipeshbist150@gmail.com"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Future photo slot: <div className="aspect-[4/5] rounded-lg border border-border bg-card" /> */}
          <div className="hidden md:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
