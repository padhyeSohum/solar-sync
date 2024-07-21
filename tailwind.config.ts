import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "foreground": "var(--foreground-hex)",
                "background": "var(--background-hex)",
                "foreground-80": "rgba(var(--foreground-rgb), 0.8)",
                "background-80": "rgba(var(--background-rgb), 0.8)",
                "foreground-50": "rgba(var(--foreground-rgb), 0.5)",
                "background-50": "rgba(var(--background-rgb), 0.5)",
                "foreground-40": "rgba(var(--foreground-rgb), 0.4)",
                "background-40": "rgba(var(--background-rgb), 0.4)",
                "foreground-20": "rgba(var(--foreground-rgb), 0.2)",
                "background-20": "rgba(var(--background-rgb), 0.2)",
                "foreground-10": "rgba(var(--foreground-rgb), 0.1)",
                "background-10": "rgba(var(--background-rgb), 0.1)",
            },
            keyframes: {
                float: {
                    "0, 100%": { transform: "translateY(-20%)" },
                    "50%": { transform: "translateY(20%)" },
                }
            },
            animation: {
                float: "float 4s ease-in-out infinite",
            }
        },
    },
    plugins: [],
};
export default config;
