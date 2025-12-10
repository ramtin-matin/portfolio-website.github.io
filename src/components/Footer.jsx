import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side Text */}
        <p className="text-sm dark:text-gray-400 text-gray-600 mb-4 sm:mb-0">
          Built with <span className="text-red-500">♥</span> using React &
          Tailwind CSS. &copy; {new Date().getFullYear()} Ramtin Matin.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/ramtin-m-291945213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-200 hover:scale-[1.05] dark:hover:scale-[1.05] transition duration-300"
          >
            [ LinkedIn ]
          </a>

          <a
            href="https://github.com/ramtin-matin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-200 hover:scale-[1.05] dark:hover:scale-[1.05] transition duration-300"
          >
            [ GitHub ]
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
