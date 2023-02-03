/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080F28",
        light_primary: "#1E2747",
        ligh_blue: "#007AFF",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
      },
    },
  },
  plugins: [],
};
