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
        extend: {
            color:{
                primary:'#A0FF1F',
                secondary:'#ff03ff'
            },
            // fontFamily:{
            //     sans: ['Graphik', 'sans-serif'],
            //     serif: ['Merriweather', 'serif'],
            // }
        },
    },
    plugins: [],
};
