/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#0c070f",
        buttonBlue: "#0047ff",
      },
      fontFamily: {
        logo: ["Dancing Script", "cursive"], 
      },
    },
  },
  plugins: [],
};
