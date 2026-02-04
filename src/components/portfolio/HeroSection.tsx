import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-8 pb-24 md:pt-24 md:pb-16">
      <div className="section-container">
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:gap-12 lg:gap-16">
          {/* Avatar */}
          <div className="mb-6 md:mb-0 md:flex-shrink-0">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-4 border-primary/20 glow-effect">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dipesh&backgroundColor=0f172a" alt="Dipesh Bist" />
              <AvatarFallback className="bg-secondary text-2xl font-bold">DB</AvatarFallback>
            </Avatar>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Dipesh Bist
            </h1>
            <p className="text-lg md:text-xl text-primary font-medium mb-3">
              Junior Developer & IoT Enthusiast
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span>Kathmandu, Nepal</span>
            </div>

            <p className="text-muted-foreground max-w-lg mb-8 text-sm md:text-base leading-relaxed">
              Building real-world IoT solutions at Nepal Digital Systems. Passionate about 
              backend APIs, frontend dashboards, cloud infrastructure, and device data 
              integration. Turning complex sensor data into actionable insights.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dipeshbist"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-lg card-hover text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dipeshbist"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-lg card-hover text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:dipesh@example.com"
                className="glass-card p-3 rounded-lg card-hover text-muted-foreground hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
