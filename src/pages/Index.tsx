import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ResearchSection from "@/components/portfolio/ResearchSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import CursorGlow from "@/components/portfolio/CursorGlow";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import SignalStrip from "@/components/portfolio/SignalStrip";
import PixelField from "@/components/portfolio/PixelField";
import PortfolioBot from "@/components/portfolio/PortfolioBot";
import BootSequence from "@/components/portfolio/BootSequence";
import CommandPalette from "@/components/portfolio/CommandPalette";
import PixelCursorTrail from "@/components/portfolio/PixelCursorTrail";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <BootSequence />
      <CursorGlow />
      <PixelCursorTrail />
      <ScrollProgress />
      <PixelField />
      <PortfolioBot />
      <CommandPalette />
      <Navigation />
      <HeroSection />
      <SignalStrip />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default Index;
