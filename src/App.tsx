import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SkillsStrip from './components/SkillsStrip';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SocialFooter from './components/SocialFooter';

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <SkillsStrip />
      <ProjectsSection />
      <ContactSection />
      <SocialFooter />
    </main>
  );
}
