/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      "mobile":{"max":"500px"}
    },
    extend: {
      gridTemplateRows:{
        "principal":"48vh 4vh 48vh"
      },
      animation: {
        wiggle: 'title 2.8s 0s normal both,blinkCursor 1s infinite normal',
        "subtitle-view": "subtitle 5s 3s normal both",
        "more-details":"details 3s 3s normal both"
      },
      keyframes: {
        title: {
          'from': {  
            width: "0",
            borderRight:"2px solid rgba(0,0,0,0.7)" 
          },
          'to': {
            width: "100%",
            borderRight: "2px solid rgba(0,0,0,0.7)" 
          },
        },
        blinkCursor:{
          "from": {
            borderRightColor:" rgba(0,0,0,0.7)"
          },
          "to":{
            borderRightColor:"transparent"
          }
        },
        subtitle:{
          "from":{
            width:"0"
          },
          "to":{
            width:"100%"
          }
        },
        details:{
          "from":{
            opacity:"0",
            display:"none"
          },
          "to":{
            opacity:"1",
            display:"inline"
          }
        }
      },
    },
  },
  plugins: [],
}
