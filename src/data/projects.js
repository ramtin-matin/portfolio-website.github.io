// Project screenshots
import ScoringSystemPic from "../assets/scoringsystem.jpg";
import PortfolioPic from "../assets/portfolio.png";
import habitTrackerPic from "../assets/habitTracker.png";

export const INITIAL_PROJECTS = [
  {
    id: 1,
    title: "Vision Scoring System",
    description:
      "Developed a system using photoresistors and MATLAB for real-time target scoring in an engineering project.",
    tech: ["MATLAB", "Arduino", "C/C++"],
    date: "May 2023",
    imageUrl: ScoringSystemPic,
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
      "The very site you are viewing, built with a focus on dark/light mode and modern, responsive design principles.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    date: "Rebuilt Dec 2025",
    imageUrl: PortfolioPic,
  },
  {
    id: 3,
    title: "Habit Tracker",
    description:
      "An application to track, analyze, and manage daily habits with RESTful APIs and modern database schema.",
    tech: ["React.js", "Python", "FastAPI", "SQL", "Tailwind CSS"],
    date: "Coming soon...",
    imageUrl: habitTrackerPic,
  },
];

// Define the custom gradient class for Tailwind
export const GRADIENT_CLASS =
  "bg-[linear-gradient(-12deg,#53BCE2,#4F9590,#32C87B)]";
