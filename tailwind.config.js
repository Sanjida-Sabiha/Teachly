/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1290px",
        },
      },
      fontFamily: {
        "font_Clash": ["Clash Grotesk", "sans-serif"],
      },
      colors:{
        'primaryColor':'#12101A',
        'secondaryColor':'#4D4B52',
        'bg':'#F8F4F2',
        'btnBg':'#FF7E3E',
        'cardBg':'#F7F7F7',
        'borderColor':'#D9D9D9',
        'footerBg':'#1E1C1B',
        'cardBg1':'#BEECA3',
        'cardBg2':'#FAEC9A',
      },

      spacing:{
        '348':'348px',
        '410':'410px',
        '520':'520px',
        '550':'550px',
        '630':'630px',
        '692':'692px',
        '770':'770px',
        '802':'802px',
        '850':'850px',
        '860':'860px',
        '1440':'1440px',
      },
      fontSize: {
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '38xl':'38px',
        '40xl':'40px',
        '42xl':'42px',
        '44xl':'44px',
        '48xl':'48px',
        '50xl':'50px',
        '60xl':'60px',
        '70xl':'70px',
        '78xl':'78px',
      },
      lineHeight: {
        '8': '30px',
        '32':'32px',
        '34':'34px',
        '38':'38px',
        '40':'40px',
        '42':'42px',
        '50':'50px',
        '52':'52px',
        '54':'54px',
        '58':'58px',
        '64':'64px',
        '70':'70px',
        '78':'78px',
      },
      boxShadow:{
        'courseShadow': '0px 20px 100px 0px #00000012',

      },
    },
  },
  plugins: [],
}
