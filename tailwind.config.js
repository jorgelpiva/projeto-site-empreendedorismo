module.exports = {
  purge: {
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'from-green-400',
    'from-blue-400',
    'from-gray-400',
    'to-green-700',
    'to-blue-700',
    'to-gray-700',
    'hover',
    /^bg-/,
    /^to-/,
    /^from/,
    /^hover/
  ]
},
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
