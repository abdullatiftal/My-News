/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#222',
                accent: '#FF4D00',
                grey: '#919195',
                lightwhite: '#ffffff42',
            },
        },
    },
    plugins: [],
}
