import LightDarkButton from "@/components/light-dark-button";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Theme = "light" | "dark";


// pages\about.tsx

export default function About() {

    const [theme, setTheme] = useState<Theme>() 
    
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-evenly p-24 pt-0 ${inter.className}`}
        >
            <LightDarkButton onThemeChange={setTheme} />

            <div className="w-full h-screen flex flex-col justify-center relative">
                placeholder
            </div>

        </main>
    );
}