import AnimatedButton from "../components/AnimatedButton";
import { Code, FileText } from "lucide-react";
import profileImageUrl from "../assets/picture.jpg";
import resumeUrl from "../assets/ramtinResume.pdf";

const HomeView = ({ handleNavClick }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6 text-center lg:text-left min-h-screen-minus-header max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-16 mb-12 lg:mb-0 order-2 lg:order-1">
        <div className="relative p-1 bg-gradient-to-br rounded-full shadow-2xl shadow-rm-teal/50 transition-all duration-500 hover:scale-[1.05]">
          <div className="p-1 dark:bg-gray-100 bg-white rounded-full">
            <img
              src={profileImageUrl}
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full dark:opacity-90 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-w-xl order-1 lg:order-2">
        <p className="text-xl font-code dark:text-gray-300 text-gray-700 mb-3 animate-fade-in-down delay-100">
          &gt; Hello, I'm Ramtin Matin
        </p>
        <h1 className="text-6xl md:text-7xl font-extrabold dark:text-gray-50 text-gray-900 mb-4 tracking-tight leading-tight animate-fade-in-down delay-200">
          Software Engineer
        </h1>
        <p className="text-2xl font-light dark:text-gray-300 text-gray-700 mb-10 animate-fade-in-down delay-300">
          A{" "}
          <span className="font-medium text-rm-teal dark:text-rm-blue">
            Computer Science Student
          </span>{" "}
          focused on scalable and engaging development.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-down delay-400">
          <AnimatedButton
            onClick={() => handleNavClick("projects")}
            className="min-w-[180px]"
          >
            <Code className="w-5 h-5 mr-2 inline" /> View Projects
          </AnimatedButton>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <AnimatedButton
              secondary
              className="min-w-[180px] dark:text-gray-300 text-gray-700"
            >
              <FileText className="w-5 h-5 mr-2 dark:text-gray-300 text-gray-700" />{" "}
              Download Resume
            </AnimatedButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
