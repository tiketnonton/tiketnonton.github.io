/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#004643",
        background2: "#abd1c6",
        headline: "#fffffe",
        headline2: "#001e1d",
        subheadline: "#0f3433",
        paragraph: "#abd1c6",
        button: "#f9bc60",
        buttontext: "#001e1d",
        card: "#abd1c6",
      },
    },
  },
  plugins: [],
};
