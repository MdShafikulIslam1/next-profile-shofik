/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#BD10E0",
          secondary: "#494965",
          accent: "#8e12fc",
          neutral: "#3d4451",
          "base-100": "#10101a",
        },
      },
      "light",
      "dark",
    ],
  },
};
