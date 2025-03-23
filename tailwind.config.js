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
      animation: {
        gradientShift: "gradientShift 3s infinite linear",
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
