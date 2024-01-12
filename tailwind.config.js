/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        main: "#7042f861",
      },

      backgroundImage: {
        stars: "url('../src/assets/images/stars.png')",
        twinkling: "url('../src/assets/images/twinkling.png')",
        gradientOne: "conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585)",
        gradientTwo: "conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac)",
      },
      screens: {
        mob: "475",
      },
      backgroundSize: {
        "100%": "100%",
      },
      keyframes: {
        moveTwinkBack: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-10000px 5000px" },
        },
        moveEath: {
          from: { transform: "translateY(-8px)" },
          to: { transform: "translateY(8px)" },
        },
        spin: {
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        "move-twink-back": "moveTwinkBack 250s linear infinite",
        "move-earth": "moveEath 4s infinite ease alternate",
        "loader-spin": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
