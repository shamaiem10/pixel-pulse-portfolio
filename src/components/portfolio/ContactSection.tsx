import { Github, Linkedin, Mail, Globe } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const ContactSection = () => {
  const ref = useFadeIn();

  return (
    <section id="contact" ref={ref as any} className="fade-section py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="pixel-border p-10 sm:p-16 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/5 blur-3xl rounded-full" />
          
          <div className="relative">
            <p className="font-pixel text-[8px] text-muted-foreground mb-6">{"// "}CONNECT</p>
            <h2 className="font-pixel text-sm sm:text-lg text-foreground mb-3">
              Let's Build <span className="text-primary text-glow-pink">Intelligent</span>{" "}
              <span className="text-secondary text-glow-yellow">Systems.</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-10">
              Open for collaborations, research, and exciting projects.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="mailto:shamaiemshabbir2@gmail.com"
                className="pixel-border-pink bg-primary/10 text-primary px-8 py-3 text-xs font-medium hover:bg-primary/20 transition-all duration-300 inline-flex items-center gap-2 hover:glow-pink"
              >
                <Mail size={14} />
                Email Me
              </a>
            </div>

            <div className="flex justify-center gap-4">
              {[
                { icon: Github, href: "https://github.com/shamaiem10", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/shamaiem-shabbir", label: "LinkedIn" },
                { icon: Mail, href: "mailto:shamaiemshabbir2@gmail.com", label: "Email" },
                { icon: Globe, href: "https://devpost.com/shamaiem10", label: "Devpost" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="pixel-border p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-pink bg-background"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="font-pixel text-[8px] text-muted-foreground">
            © 2025 Shamaiem Shabbir — Built with pixels & purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
