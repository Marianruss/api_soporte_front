/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      fontFamily: {
        'card': ['Franklin Gothic Medium', 'Arial Narrow'],
        'yoizen':["roboto",'sans-serif']
      },
      fontSize: {
        'xs': '12px',
        's': '14px',
        'l': '15px',
        'xl': '18px',
        '2xl': '25px',
        '3xl': '30px'
      },
      spacing: {
        '0': '0px',
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '25': '25px',
        '30': '30px',
        '20': '20px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '75': '75px',
        '80': '80px',
        '100': '100px',
        '200': '200px',
        '250': '250px',
        '350': '350px',
        '450': '450px',
        '400': '400px',
        '300': '300px',
        '500': '500px',
        '550': '550px',
        '600': '600px'
  
      },
      extend: {
        width: {
          '5': '5px',
          '10': '10px',
          '25': '25px',
          '15': '15px',
          '20': '20px',
          '40': '40px',
          '50': '50px',
          '60': '60px',
          '70': '70px',
          '80': '80px',
          '90': '90px',
          '100': '100px',
          '110': '110px',
          '150': '150px',
          '180': '180px',
          '190': '190px',
          '200': '200px',
          '210': '210px',
          '250': '250px',
          '330': '330px',
          '350': '350px',
          '360': '360px',
          '450': '450px',
          '400': '400px',
          '300': '300px',
          '500': '500px',
          '550': '550px',
          '600': '600px',
          '750': '750px',
          '800': '800px',
          '900': '900px'
        },
        height: {
          '5': '5px',
          '10': '10px',
          '15': '15px',
          '20': '20px',
          '25': '25px',
          '40': '40px',
          '50': '50px',
          '60': '60px',
          '70': '70px',
          '80': '80px',
          '90': '90px',
          '100': '100px',
          '150': '150px',
          '200': '200px',
          '250': '250px',
          '350': '350px',
          '450': '450px',
          '400': '400px',
          '300': '300px',
          '500': '500px',
          '550': '550px',
          '600': '600px'
        },
        backgroundImage:{
          "jumbotron": "url(/public/images/jumbo-wallpaper.jpg)"
        }
  
      },
    },
    plugins: [
    ],
  }

