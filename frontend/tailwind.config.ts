import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            brand: {
                black: "#0a0a0a", // Softer black for modern feel
                white: "#ffffff",
                primary: "#2563eb", // Vibrant Blue
                secondary: "#9333ea", // Purple
                accent: "#14b8a6", // Teal
                muted: "#f4f4f5", // Light Gray background
                "dark-muted": "#18181b", // Dark Gray background
            },
            pastel: {
                blue: "#eff6ff",
                purple: "#faf5ff",
                teal: "#f0fdfa",
                pink: "#fdf2f8",
            }
        },
        fontFamily: {
            sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        },
        animation: {
            "blob": "blob 7s infinite",
            "fade-in": "fadeIn 0.5s ease-out forwards",
            "slide-up": "slideUp 0.5s ease-out forwards",
        },
        keyframes: {
            blob: {
                "0%": { transform: "translate(0px, 0px) scale(1)" },
                "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                "100%": { transform: "translate(0px, 0px) scale(1)" },
            },
            fadeIn: {
                "0%": { opacity: "0" },
                "100%": { opacity: "1" },
            },
            slideUp: {
                "0%": { transform: "translateY(20px)", opacity: "0" },
                "100%": { transform: "translateY(0)", opacity: "1" },
            },
        },
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            "mesh": "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(270,100%,45%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)",
        },
    },
    plugins: [],
};
export default config;
