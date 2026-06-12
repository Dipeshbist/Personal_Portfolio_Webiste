import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const infoItems = [
  ["Location", "Kathmandu, Nepal"],
  // ["Availability", "Open to full-time and freelance work"],
  ["Education", "BSc (Hons) Computer Systems Engineering - ISMT / University of Sunderland"],
];

export function AboutSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "service_5it2mj8",
        "template_b3x2pji",
        templateParams,
        "e8XTW7ns5OoPWTEFz"
      );

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong.", {
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "border-border bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary";

  return (
    <section id="contact" className="py-16 pb-32 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="section-heading">About</h2>
            <div className="space-y-4 leading-7 text-[#d5d5d5]">
              <p>
                I'm a Full Stack Developer based in Kathmandu, Nepal, currently
                working on production IoT systems at Nepal Digital Systems. My
                journey into tech started with curiosity about how devices
                communicate with the cloud.
              </p>
              <p>
                At work, I contribute to{" "}
                <span className="text-foreground">garud.cloud</span>, an
                industrial telemetry platform that processes real-time sensor
                data from equipment across various industries. I work across the
                full stack, from designing REST APIs to building React
                dashboards.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies,
                contributing to open-source projects, or learning about system
                architecture and cloud infrastructure.
              </p>
            </div>

            <dl className="mt-8 divide-y divide-border border-y border-border">
              {infoItems.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 py-4 sm:grid-cols-[140px_1fr]"
                >
                  <dt className="font-mono text-xs text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="text-sm text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="section-heading">Get in touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <footer className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Dipesh Bist</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Dipeshbist"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dipesh-bist-2a86b4282/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dipeshbist150@gmail.com"
              className="hover:text-primary"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

