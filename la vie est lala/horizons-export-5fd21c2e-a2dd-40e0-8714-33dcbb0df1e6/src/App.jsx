
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import LoadingScreen from '@/components/LoadingScreen';

function App() {
  return (
    <>
      <Helmet>
        <title>Portfolio WAOH - Développeur Créatif</title>
        <meta name="description" content="Portfolio immersif et interactif d'un développeur créatif. Découvrez mes projets, compétences et expériences à travers une interface 3D innovante." />
        <meta name="keywords" content="portfolio, développeur, créatif, 3D, WebGL, React, JavaScript" />
        <meta property="og:title" content="Portfolio WAOH - Développeur Créatif" />
        <meta property="og:description" content="Portfolio immersif et interactif d'un développeur créatif" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Suspense fallback={<LoadingScreen />}>
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <Toaster />
        </main>
      </Suspense>
    </>
  );
}

export default App;
