const AnimatedButton = ({
  children,
  onClick,
  className = "",
  secondary = false,
  type = "button",
}) => {
  // Primary button uses the gradient
  const primaryClasses = `
        bg-rm-gradient text-white shadow-lg shadow-rm-teal/50
        hover:scale-[1.02] active:scale-[0.98] transition duration-300 relative overflow-hidden
        before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
    `;

  // Secondary button uses a bordered, transparent look
  const secondaryClasses = `
        border-2 border-rm-teal text-rm-teal bg-transparent 
        dark:border-rm-green dark:text-rm-green dark:hover:bg-rm-teal/10
        hover:bg-rm-teal/10 hover:shadow-lg hover:shadow-rm-teal/20
        transition duration-300 hover:scale-[1.02] active:scale-[0.98]
    `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-3 font-semibold rounded-xl tracking-wider ${
        secondary ? secondaryClasses : primaryClasses
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
