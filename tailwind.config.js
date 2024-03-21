const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors:{
            neongreen:'#A0FF1F',
            neonpink:'#ff03ff'
        },
        extend: {
            colors:{
                primary: '#A0FF1F', // 自定义的主要颜色
                secondary:'#ff03ff',
                dark:'#000',
              },
            // fontFamily:{
            //     sans: ['Graphik', 'sans-serif'],
            //     serif: ['Merriweather', 'serif'],
            // }
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
