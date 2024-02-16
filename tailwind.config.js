/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue,css}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      width:{
        wd05:"5vw",
        wd1:"10vw",
        wd2:"20vw",
        wd3:"30vw",
        wd4:"40vw",
        wd45:"45vw",
        wd5:"50vw",
        wd6:"60vw",
        wd7:"70vw",
        wd8:"80vw",
        wd9:"90vw",
        98:"98vw",
        wdFull:"100vw",
        px10:"100px",
        px20:"200px",
        px30:"300px",
        px40:"400px",
        px50:"500px",
        px60:"600px",
        px70:"700px",
        px80:"800px",
        px90:"900px",
        px100:"1000px",


      },
      height:{
        ht05:"5vh",
        ht1:"10vh",
        ht2:"20vh",
        ht3:"30vh",
        ht4:"40vh",
        ht45:"45vh",
        ht5:"50vh",
        ht6:"60vh",
        ht7:"70vh",
        ht8:"80vh",
        ht9:"90vh",
        98:"98vh",
        htFull:"100vh",
        px10:"100px",
        px20:"200px",
        px30:"300px",
        px40:"400px",
        px50:"500px",
        px60:"600px",
        px70:"700px",
        px80:"800px",
        px90:"900px",
        px100:"1000px",


      },
      fontFamily:{
        serif: 'Young Serif',
        lemon: 'Lemon',
        salsa:'Salsa'
      },
      marginLeft:{
        nml:"-1rem"
      }
    },
  },
  plugins: [],
}