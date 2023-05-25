/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'about-img': "url('/images/aboutimg.jpg')",
     },
    },
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '768px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'},
    }
  },
  plugins: [],
}
