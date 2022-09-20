/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        'body': [
              'Inter', 
              'ui-sans-serif', 
              'system-ui', 
              '-apple-system', 
              'system-ui', 
              'Segoe UI', 
              'Roboto', 
              'Helvetica Neue', 
              'Arial', 
              'Noto Sans', 
              'Nunito',
              'sans-serif', 
              'Apple Color Emoji', 
              'Segoe UI Emoji', 
              'Segoe UI Symbol', 
              'Noto Color Emoji'
            ],
                'sans': [
              'Inter', 
              'ui-sans-serif', 
              'system-ui', 
              '-apple-system', 
              'system-ui', 
              'Segoe UI', 
              'Roboto', 
              'Helvetica Neue', 
              'Arial', 
              'Noto Sans', 
              'sans-serif', 
              'Apple Color Emoji', 
              'Segoe UI Emoji', 
              'Segoe UI Symbol', 
              'Noto Color Emoji'
            ]
      },
      backgroundImage: (theme) => ({
        triangle: "url('/src/images/bg-triangle.svg')",
      }),
    },
  },
  plugins: [require("flowbite/plugin")],
};


// tailwind.config = {
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
//       }
//     },
//     fontFamily: {
//       'body': [
//     'Inter', 
//     'ui-sans-serif', 
//     'system-ui', 
//     '-apple-system', 
//     'system-ui', 
//     'Segoe UI', 
//     'Roboto', 
//     'Helvetica Neue', 
//     'Arial', 
//     'Noto Sans', 
//     'sans-serif', 
//     'Apple Color Emoji', 
//     'Segoe UI Emoji', 
//     'Segoe UI Symbol', 
//     'Noto Color Emoji'
//   ],
//       'sans': [
//     'Inter', 
//     'ui-sans-serif', 
//     'system-ui', 
//     '-apple-system', 
//     'system-ui', 
//     'Segoe UI', 
//     'Roboto', 
//     'Helvetica Neue', 
//     'Arial', 
//     'Noto Sans', 
//     'sans-serif', 
//     'Apple Color Emoji', 
//     'Segoe UI Emoji', 
//     'Segoe UI Symbol', 
//     'Noto Color Emoji'
//   ]
//     }
//   }
// }