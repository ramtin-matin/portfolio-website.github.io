# Ramtin Matin - Developer Portfolio

This repository contains the source code for my personal portfolio website, live at **[ramtinmatin.com](https://ramtinmatin.com)**.

It is a fully responsive, single-page application built to showcase my skills, projects, and professional background. The site is crafted with a modern tech stack, emphasizing a clean user interface, smooth animations, and a seamless user experience with both light and dark modes.

## Features
*   **Modern Tech Stack:** Built with React, Vite, and styled with Tailwind CSS.
*   **Responsive Design:** Optimized layout for a seamless experience on all devices, from mobile to desktop.
*   **Dark/Light Mode:** Includes a theme toggle that persists the user's preference in `localStorage`.
*   **Smooth Animations:** Utilizes custom, performance-optimized animations with Tailwind CSS for a dynamic feel.
*   **Component-Based Architecture:** Logically organized into reusable components and distinct views for clean code and maintainability.
*   **Interactive Showcase:** Features an interactive carousel to display projects and categorized cards for skills.

## Tech Stack
*   **Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** [GitHub Pages](https://pages.github.com/)

## Project Structure
The `src` directory is organized to separate concerns, making the codebase clean and scalable.

```
src/
├── assets/         # Static assets like images and resume PDF
├── components/     # Reusable React components (NavBar, Footer, SkillCard, etc.)
├── context/        # React Context for global state (e.g., ThemeContext)
├── data/           # Static data arrays for projects, skills, and navigation
├── views/          # Main sections/pages of the application (Home, About, etc.)
├── App.jsx         # Main application component and view router
├── main.jsx        # Root React component renderer
└── index.css       # Global styles and Tailwind CSS configurations
```

## Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
*   Node.js (v18 or later)
*   npm or another package manager

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/ramtin-matin/portfolio-website.github.io.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd portfolio-website.github.io
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.


