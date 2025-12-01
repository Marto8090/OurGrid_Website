export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // Renamed to force browser refresh
        expandDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        // "forwards" is crucial here - it keeps the element visible after animation ends
        expandDown: "expandDown 0.4s ease-out forwards",
        fadeInUp: "fadeInUp 0.5s ease-out forwards"
      }
    },
  },
  plugins: [],
};