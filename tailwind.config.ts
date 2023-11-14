const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       // backgrounds and buttons
      backgroundColor:{
        skin:{
          dark:'var(--color-dark)',
          bgdark:'var(--color-bgdark)',
        }
      },

    },
  },
  plugins: [],
});
