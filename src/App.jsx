import React, { useState, useMemo } from "react";

import { ThemeProvider } from "./context/ThemeContext";
import ProjectsView from "./views/ProjectsView";
import AboutView from "./views/AboutView";
import HomeView from "./views/HomeView";
import SkillsView from "./views/SkillsView";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

// --- Main App Component ---

const AppContent = () => {
  const [activeView, setActiveView] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CurrentView = useMemo(() => {
    switch (activeView) {
      case "home":
        return HomeView;
      case "about":
        return AboutView;
      case "skills":
        return SkillsView;
      case "projects":
        return ProjectsView;
      default:
        return HomeView;
    }
  }, [activeView]);

  const handleNavClick = (view) => {
    setActiveView(view);
    setIsMenuOpen(false); // Close menu on selection
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Main Content Area */}

      <Navbar
        activeView={activeView}
        handleNavClick={handleNavClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="pt-20">
        <CurrentView handleNavClick={handleNavClick} />
      </main>

      <Footer />
    </div>
  );
};

// Wrapper to provide Theme Context
const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
