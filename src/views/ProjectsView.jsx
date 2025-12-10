import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { INITIAL_PROJECTS, GRADIENT_CLASS } from "../data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsView = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % INITIAL_PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + INITIAL_PROJECTS.length) % INITIAL_PROJECTS.length
    );
  };

  const project = INITIAL_PROJECTS[currentProject];

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen-minus-header flex flex-col items-center">
      <SectionTitle>Featured Projects</SectionTitle>

      <div className="relative w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 transition-all duration-500 ease-in-out transform hover:shadow-rm-teal/50 dark:hover:shadow-rm-green/50 animate-fade-in delay-200">
        {/* Project Image UI */}
        <div className="mb-6 rounded-xl overflow-hidden shadow-xl border-4 border-rm-teal/50 dark:border-rm-green/50">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full object-cover aspect-video hover:scale-[1.03] transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x500/103b4f/ffffff?text=Project+Image+Missing";
            }}
          />
        </div>

        {/* Project Details */}
        <div className="text-center p-4">
          <h3 className="font-mono text-3xl dark:text-gray-300 mb-3">
            {project.title}
          </h3>
          <p className="text-lg text-gray-900 dark:text-gray-100 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="font-mono dark:bg-gray-600 dark:text-gray-200 bg-rm-teal/10 text-rm-gray-900 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-500 dark:border-rm-green/30 shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="text-sm dark:text-gray-300 text-gray-700 bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-lg">
            {project.date}
          </span>
        </div>

        {/* Navigation Arrows */}
        {INITIAL_PROJECTS.length > 1 && (
          <>
            <button
              onClick={prevProject}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-3 ml-2 bg-rm-gradient text-white rounded-full shadow-lg hover:scale-110 transition duration-300`}
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-3 mr-2 bg-rm-gradient text-white rounded-full shadow-lg hover:scale-110 transition duration-300`}
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {INITIAL_PROJECTS.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentProject
                  ? GRADIENT_CLASS + " scale-110 shadow-md"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-rm-teal"
              }`}
              onClick={() => setCurrentProject(index)}
              aria-label={`Go to Project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
