module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        portbg: '#f3f3f3',
        portxt: '#111111',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
