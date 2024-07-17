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
                "foreground-20": "rgba(var(--foreground-rgb), 0.2)",
                "background-20": "rgba(var(--background-rgb), 0.2)",
            }
        },
    },
    plugins: [],
};
export default config;
