const breakpoints = {
  xs: "333px",
  sm: '540px',
  md: '668px',
  lg: '860px',
  xl: '1090px',
  xxl: '1244px',

}




/** @type {import('tailwindcss').Config} */
module.exports = {
  important :true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
      
        mdUp: { min: breakpoints.sm },
        lgUp: { min: breakpoints.md },
        xlUp: { min: breakpoints.lg },
        xxlUp: { min: breakpoints.xl },
        xxxlUp: { min: breakpoints.xxl },
  
        xxlDown: { max: breakpoints.xxl },
        xlDown: { max: breakpoints.xl },
        lgDown: { max: breakpoints.lg },
        mdDown: { max: breakpoints.md },
  
        xxl: { max: breakpoints.xxl, min: breakpoints.xl },
        xl: { max: breakpoints.xl, min: breakpoints.lg },
        lg: { max: breakpoints.lg, min: breakpoints.md },
        md: { max: breakpoints.md, min: breakpoints.sm },
        sm: { max: breakpoints.sm },
        xs: { max: breakpoints.xs }, // sm ONLY



      },


    },
  },
  plugins: [],
}


// Screens using repo code css
// https://github.com/white-rabbit-japan/eleventail/blob/240a9cb3bbaefa2e959b96115730ddde8009e1ae/src/site/_includes/css/main.css
