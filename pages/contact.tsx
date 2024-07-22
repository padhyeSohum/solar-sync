import LightDarkButton from "@/components/light-dark-button";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
type Theme = "light" | "dark";

export default function Contacts() {
    
    const [theme, setTheme] = useState<Theme>()

    return (
        <main
        className={`flex min-h-screen flex-col items-center justify-evenly p-24 pt-0 ${inter.className}`}
        >
            <LightDarkButton onThemeChange={setTheme} />
            <div className="w-full h-screen flex flex-col justify-center relative">
            <h1 className="text-balance mb-8 text-[3.5rem]">Consulting</h1>

            <h2 className="w-5/6 text-2xl leading-[150%]">Questions?</h2>

            <h2 className="w-5/6 text-2xl leading-[150%]">Email</h2>
            <h3 className="w-5/6 text-2xl leading-[150%]"><a className="text-blue-500" href= "mailto: solar.sync.team@gmail.com">solar.sync.team@gmail.com</a></h3>
            </div>
        </main>
    );
}