// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       // Custom typography-like styling (without plugin)
//       // You can still define heading colors manually in CSS or here
//       colors: {
//         heading: '#1e40af', // blue-800
//         paragraph: '#1f2937',
//         border: "rgb(229, 231, 235)", // gray-800
//       },

//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: 0, transform: 'translateY(20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-15px)' },
//         },
//         spinSlow: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//       },
//       animation: {
//         fadeIn: 'fadeIn 1s ease forwards',
//         'fadeIn-delay-200': 'fadeIn 1s ease 0.2s forwards',
//         'fadeIn-delay-400': 'fadeIn 1s ease 0.4s forwards',
//         'fadeIn-delay-600': 'fadeIn 1s ease 0.6s forwards',
//         'fadeIn-delay-800': 'fadeIn 1s ease 0.8s forwards',
//         float: 'float 4s ease-in-out infinite',
//         'spin-slow': 'spinSlow 60s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: '#1e40af',
        paragraph: '#1f2937',
        border: "rgb(229, 231, 235)",
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        'fadeIn-delay-200': 'fadeIn 1s ease 0.2s forwards',
        'fadeIn-delay-400': 'fadeIn 1s ease 0.4s forwards',
        'fadeIn-delay-600': 'fadeIn 1s ease 0.6s forwards',
        'fadeIn-delay-800': 'fadeIn 1s ease 0.8s forwards',
        float: 'float 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 60s linear infinite',
      },
    },
  },
  plugins: [],
};
