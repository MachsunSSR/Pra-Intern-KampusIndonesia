module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            mainfont: ["Poppins"],
            secondaryfont: ["Inter"],
        },
        extend: {
            padding: {
                "1/3": "33.3333%",
                "2/3": "66.6667%",
            },
            colors: {
                metrocolor: {
                    //metrocolor-primblue
                    primblue: "#24CAE5",
                    secblue: "#F0F9FF",
                    primblack: "#182231",
                    secblack: "#4C5E79",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
