import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const siteName = process.env.NEXT_SITE_NAME;

  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      {/* <p style={{ color: "white", textAlign: "center" }}>
        {siteName}
      </p> */}

      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}