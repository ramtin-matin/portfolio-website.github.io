/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "rm-blue": "#53BCE2",
        "rm-teal": "#4F9590",
        "rm-green": "#32C87B",
      },
      backgroundImage: {
        "rm-gradient": "linear-gradient(-12deg,#53BCE2,#4F9590,#32C87B)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        code: ["Space Mono", "monospace"],
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
