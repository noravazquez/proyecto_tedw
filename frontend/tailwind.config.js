/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Blue1": "#161d2b",
        "Blue2": "#283347",
        "Blue3": "#586c91",
        "Blue4": "#8fa4c3",
        "Blue5": "#dfe7f2",
        "Blue6": "#f4f7fc",
        "White": "#FFFFFF"
      },
      fontFamily: {
        'primary': ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

