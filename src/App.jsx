import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import NavigationBar from './components/Navigation';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WorkingOnSection from './components/WorkingOnSection';

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative">
        <NavigationBar />
        <main>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          {/* <WorkingOnSection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;