/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brown: {
                    100: "#c15759",
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["retro"],
    },
};
