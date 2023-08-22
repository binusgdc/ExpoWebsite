import { type Config } from "tailwindcss"
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            serif: ['"Lilita One"', "sans-serif"],
            body: ["Poppins", "sans-serif"],
        },
        colors: {
            magenta: "#423C55",
            pink: {
                30: "#FFC0D5",
                60: "#FF96B9",
                90: "#EB6793",
            },
            orange: {
                30: "#FFE6AF",
                60: "#FED780",
                90: "#F9BD38",
            },
            cyan: {
                30: "#A7E9FF",
                60: "#6CD5F8",
                90: "#3CB6DE",
            },
            purple: {
                30: "#C0B0FA",
                60: "#8F7BDA",
                90: "#6951BF",
            },
        },
    },
    plugins: [],
} satisfies Config)
