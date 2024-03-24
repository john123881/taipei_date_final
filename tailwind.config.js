/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
            colors: {
                transparent: 'transparent',
                neongreen: "#A0FF1F",
                neonpink: "#ff03ff",
                light: "#fff",
                purple: '#3f3cbb',
                midnight: '#121063',
                metal: '#565584',
                tahiti: '#3ab7bf',
                silver: '#ecebff',
                bubblegum: '#ff77e9',
                bermuda: '#78dcca',
            },
        boxShadow: {
            xl3: "0 0 13.6px 10px rgba(160, 255, 31, 0.58)",
            xl4: "0 0 28px 8px rgba(255, 3, 255, 1)",
        },
        extend: {
            colors: {
                primary: "#A0FF1F", // 自定义的主要颜色
                secondary: "#ff03ff",
                dark: "#000",
            },
            btn:{
                primary: "#A0FF1F",
            }
            // boxShadow: {
            //     xl3: "0 0 13.6px 10px rgba(160, 255, 31, 0.58)",
            // },
            // fontFamily:{
            //     sans: ['Graphik', 'sans-serif'],
            //     serif: ['Merriweather', 'serif'],
            // }
        },
    },
    darkMode: "class",
    plugins: [require("daisyui")],
};
