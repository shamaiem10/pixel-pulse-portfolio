import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import CursorGlow from "@/components/portfolio/CursorGlow";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <CursorGlow />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default Index;
