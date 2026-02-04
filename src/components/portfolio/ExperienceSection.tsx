import { Building2, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Nepal Digital Systems Pvt. Ltd.",
    role: "Junior Developer",
    period: "2024 - Present",
    type: "Full-time",
    description:
      "Working on a production IoT telemetry platform (garud.cloud). Building backend APIs, frontend dashboards, and integrating IoT device data. Managing cloud infrastructure and deployment pipelines.",
    highlights: [
      "Developed REST APIs for IoT device management",
      "Built real-time dashboards for sensor data visualization",
      "Implemented MQTT-based data ingestion pipelines",
      "Managed AWS cloud infrastructure and deployments",
    ],
    link: "https://garud.cloud",
  },
  {
    company: "Nepal Digital Systems Pvt. Ltd.",
    role: "Intern",
    period: "2023 - 2024",
    type: "Internship",
    description:
      "Started as an intern learning IoT systems and web development. Contributed to internal tools and gained hands-on experience with production systems.",
    highlights: [
      "Learned IoT protocols and device communication",
      "Assisted in frontend development tasks",
      "Contributed to documentation and testing",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building production-grade IoT solutions in Nepal's growing tech ecosystem
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-6 md:p-8 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-lg">{exp.company}</h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-primary font-medium">{exp.role}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                  <span className="px-2 py-0.5 bg-secondary rounded-md text-xs">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
