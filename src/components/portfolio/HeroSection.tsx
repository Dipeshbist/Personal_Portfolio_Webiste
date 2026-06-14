import { Download, Github, Linkedin, Mail } from "lucide-react";

const heroTech = ["NestJS", "ExpressJS", "React", "TypeScript", "PostgreSQL", "Prisma", "Shopify", "MQTT", "Docker"];

export function HeroSection() {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;
  const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;

  return (
    <section id="home" className="pt-24 pb-16 md:pt-28">
      <div className="section-container">
        <div className="max-w-[760px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border bg-card sm:h-28 sm:w-28">
              <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-primary sm:text-3xl">
                DB
              </div>
              <img
                src={profileImage}
                alt="Dipesh Bist"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-normal text-primary">
                kathmandu, nepal
              </p>
              <h1 className="text-[34px] font-semibold leading-tight tracking-normal text-foreground md:text-5xl">
                Dipesh Bist
              </h1>
              <p className="mt-3 text-lg font-medium text-primary">
                Full Stack Developer
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-[640px] text-base leading-7 text-[#d5d5d5]">
            I build and maintain production IoT platforms, AI-powered
            applications, and enterprise web systems at Nepal Digital Systems. I
            work across the full stack, from NestJS APIs and PostgreSQL
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
      </div>
    </section>
  );
}
