/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#004643",
        headline: "#fffffe",
        paragraph: "#abd1c6",
        button: "#f9bc60",
        buttontext: "#001e1d",
        card: "#abd1c6",
      },
    },
  },
  plugins: [],
};
