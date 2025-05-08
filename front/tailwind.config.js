/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
    extend: {
        colors: {
            primary: '#884ea0',
            secondary: '#c399d5',
            primary_dark: '#6e5876',
            accent: '#e67e22',
            background: '#f6f1f8', // Couleur de fond
            text_dark: '#1c2833', // Couleur du texte dark
            text_light: '#ebedef', // Couleur du texte light
        },
    },
},
plugins: [],
}