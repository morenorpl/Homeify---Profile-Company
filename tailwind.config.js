/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        // => @media (min-width: 375px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        "regal-blue": "#243c5a",
      },
      transitionDuration: {
        '5000': '5000ms',
      }
    },
  },
  plugins: [],
};
