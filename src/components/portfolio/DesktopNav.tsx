import { cn } from "@/lib/utils";

interface DesktopNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

export function DesktopNav({ activeSection, onNavigate }: DesktopNavProps) {
  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50">
      <div className="glass-card border-b border-border/50 rounded-none">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => onNavigate("home")}
              className="text-lg font-semibold gradient-text"
            >
              Dipesh Bist
            </button>

            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about");
              }}
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
