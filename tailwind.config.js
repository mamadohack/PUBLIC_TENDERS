/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryhover: "var(--primary-hover)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
