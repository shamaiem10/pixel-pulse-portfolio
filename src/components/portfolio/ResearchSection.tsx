import useFadeIn from "@/hooks/useFadeIn";
import { FlaskConical, Microscope, ShieldCheck } from "lucide-react";

const publications = [
  {
    title: "CONCORD-XAI: Explainability-Guided Detection and Mitigation of Shortcut Learning in Machine Learning Models",
    venue: "Under Review - AI2ML Azerbaijan 2026",
    description: "Detects and mitigates shortcut learning through consensus across GradCAM++, SHAP, and LIME, introducing an XAI Consensus Score for cross-method agreement.",
    icon: ShieldCheck,
  },
  {
    title: "Empirical Evaluation of Bayesian Fusion and Post-Hoc XAI Methods for Biological Classification",
    venue: "Under Review - ICET GIKI 2026",
    description: "Validates Bayesian fusion of image and text classifiers and compares the robustness of eight post-hoc XAI methods on biological datasets.",
    icon: Microscope,
  },
  {
    title: "Artificial Intelligence-Driven Optimization of Regression Testing: A Hybrid Adaptive Framework",
    venue: "Under Review - ICoDT2 2026",
    description: "Proposes HARP, a hybrid clustering, XGBoost, and reinforcement-learning framework for intelligent regression-test prioritization.",
    icon: FlaskConical,
  },
];

const ResearchSection = () => {
  const ref = useFadeIn();
  return (
    <section id="research" ref={ref as any} className="fade-section py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-pixel text-sm sm:text-base text-primary">{"// "}RESEARCH</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        </div>
        <p className="text-sm text-muted-foreground mb-10">Current work in explainable AI, multimodal classification, and intelligent software testing.</p>
        <div className="grid gap-4">
          {publications.map((paper, index) => (
            <article key={paper.title} className="pixel-border bg-card p-6 group hover:glow-pink relative overflow-hidden">
              <span className="absolute right-4 top-4 font-pixel text-[8px] text-muted-foreground/30">0{index + 1}</span>
              <div className="flex items-start gap-4 pr-8">
                <div className="pixel-border-pink p-2 bg-primary/10 shrink-0"><paper.icon size={16} className="text-primary" /></div>
                <div>
                  <p className="font-pixel text-[8px] text-secondary mb-3">{paper.venue}</p>
                  <h3 className="text-sm font-semibold text-foreground leading-relaxed mb-3">{paper.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{paper.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
