import { ExternalLink } from "lucide-react";

const workstreams = [
  {
    title: "Garud IoT Platform (production)",
    description:
      "Designed and deployed a production IoT telemetry platform. NestJS, Prisma, PostgreSQL backend; ThingsBoard integration over MQTT/MQTTS with mTLS certificates (Root CA, device certs); React + Recharts + Leaflet dashboards; Dockerized deployment with Nginx, SSL, and GitHub Actions CI/CD.",
  },
  {
    title: "Nepal Digital Systems Website",
    description:
      "Built and deployed the official company website end to end: React + Express + PostgreSQL, Docker containers, Nginx reverse proxy, automated CI/CD for frontend, backend, and admin.",
  },
  {
    title: "SmartCap Shopify Store",
    description:
      "Customized a Shopify storefront on Dawn theme: custom Liquid sections, responsive product pages, store configuration.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-border bg-secondary/40 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">Experience</h2>

        <div className="max-w-4xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold text-foreground">Nepal Digital Systems Pvt. Ltd.</h3>
                <a
                  href="https://nepaldigital.systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Nepal Digital Systems website"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-2 text-primary">Intern to Full Stack Developer</p>
            </div>
            <p className="font-mono text-xs text-muted-foreground">Jan 2025 - Present</p>
          </div>

          <div className="mt-8 space-y-6">
            {workstreams.map((workstream) => (
              <div key={workstream.title} className="border-l-2 border-border pl-4">
                <h4 className="font-medium text-foreground">{workstream.title}</h4>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#d5d5d5]">{workstream.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
