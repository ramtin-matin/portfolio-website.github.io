import React from "react";
import { FileText, Menu, X, Sun, Moon } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { NAV_ITEMS } from "../data/navItems";
import { useTheme } from "../context/ThemeContext";
import { resumeUrl } from "../views/HomeView";

const Navbar = ({ activeView, handleNavClick, isMenuOpen, setIsMenuOpen }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <>
      {/* MAIN NAVBAR */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg dark:shadow-gray-800/50 z-50 h-20 flex items-center transition-colors duration-500">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo / Name */}
          <button
            className="text-3xl font-mono tracking-widest dark:text-gray-100"
            onClick={() => handleNavClick("home")}
          >
            ramtin.<b>Matin</b>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.view}`}
                onClick={() => handleNavClick(item.view)}
                className={`flex items-center text-lg font-medium transition duration-200 p-2 rounded-lg relative ${
                  activeView === item.view
                    ? "text-black dark:text-white font-extrabold"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                <span className="mr-1 text-sm font-code">{`0${
                  NAV_ITEMS.indexOf(item) + 1
                }.`}</span>
                {item.name}

                {/* Active underline */}
                {activeView === item.view && (
                  <span className="absolute bottom-0 left-1/2 w-4 h-0.5 transform -translate-x-1/2 rounded-full bg-rm-gradient" />
                )}
              </a>
            ))}

            {/* Resume Button */}
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <AnimatedButton
                secondary
                className="py-2 px-4 text-sm text-gray-500 dark:text-gray-300"
              >
                Resume
              </AnimatedButton>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 ml-4 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Nav Buttons */}
          <div className="flex items-center md:hidden">
            {/* Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition mr-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 p-4 md:hidden animate-fade-in transition-colors duration-500">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.view}`}
                onClick={() => handleNavClick(item.view)}
                className={`flex items-center text-xl font-medium p-4 rounded-xl transition duration-200 ${
                  activeView === item.view
                    ? "bg-rm-teal/20 text-rm-teal dark:bg-rm-green/20 dark:text-rm-green"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon className="w-6 h-6 mr-4" />
                {item.name}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-xl font-medium p-4 rounded-xl text-white mt-4"
            >
              <AnimatedButton className="w-full">
                <FileText className="w-6 h-6 mr-3" /> Download Resume
              </AnimatedButton>
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
