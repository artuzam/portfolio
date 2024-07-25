/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent-green': '#7BB500',
        'background-green': '#F2FFD8',
        'accent-blue': '#406AFF',
        'background-blue': '#D8E0FF',
        'accent-pink': '#FD38E9',
        'background-pink': '#FFD8FB',
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
};
