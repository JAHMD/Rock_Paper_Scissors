/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Barlow Semi Condensed", "sans-serif"],
      },
      boxShadow: {
        outerShadow: "0 6px 0px rgba(0, 0, 0, 0.25)",
        innerShadow: "0px 6px 0 inset hsl(217, 16%, 80%)",
      },
      colors: {
        primary: {
          scissorsFrom: "hsl(39, 89%, 49%)",
          scissorsTo: "hsl(40, 84%, 53%)",
          paperFrom: "hsl(230, 89%, 62%)",
          paperTo: "hsl(230, 89%, 65%)",
          rockFrom: "hsl(349, 71%, 52%)",
          rockTo: " hsl(349, 70%, 56%)",
          cyanFrom: "hsl(189, 59%, 53%)",
          cyanTo: "hsl(189, 58%, 57%)",
        },
        neutral: {
          darkText: "hsl(229, 25%, 31%)",
          scoreText: "hsl(229, 64%, 46%)",
          headerOutline: "hsl(217, 16%, 45%)",
        },
        background: {
          to: "hsl(214, 47%, 23%) ",
          from: "hsl(237, 49%, 15%)",
        },
      },
    },
  },
  plugins: [],
};
