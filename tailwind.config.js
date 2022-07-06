module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2563eb",

          "secondary": "#fbbf24",

          "accent": "#f3f4f6",

          "neutral": "#110E0E",

          "base-100": "#171212",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272"
        },
      },
    ],
  },
  content: ['./public/index.html', './src/**/*.svelte'],
  plugins: [require('daisyui')],
};