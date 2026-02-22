import { Github, Linkedin, Mail } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const ContactSection = () => {
  const ref = useFadeIn();

  return (
    <section id="contact" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-pixel text-sm sm:text-lg text-foreground mb-4">
          Let's Build <span className="text-primary">Intelligent</span>{" "}
          <span className="text-secondary">Systems.</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-10">
          Open for collaborations, research, and exciting projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:shamaiemshabbir2@gmail.com"
            className="pixel-border-pink bg-primary/10 text-primary px-6 py-3 text-xs font-medium hover:bg-primary/20 transition-colors inline-flex items-center gap-2"
          >
            <Mail size={14} />
            Email Me
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/shamaiem10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors link-underline"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/shamaiem-shabbir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors link-underline"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:shamaiemshabbir2@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors link-underline"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-pixel text-[8px] text-muted-foreground">
            © 2025 Shamaiem Shabbir — Built with pixels & purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
