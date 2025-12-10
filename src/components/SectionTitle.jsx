const SectionTitle = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 text-center relative pt-4 animate-fade-in">
    {children}
    <span
      className={`block w-16 h-1 mx-auto mt-2 rounded-full bg-rm-gradient`}
    />
  </h2>
);

export default SectionTitle;
