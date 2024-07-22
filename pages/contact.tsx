import { Inter } from "next/font/google";
import { useState } from "react";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
type Theme = "light" | "dark";

export default function Contacts() {
    
    const [theme, setTheme] = useState<Theme>()

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-evenly p-24 pt-0 ${inter.className}`}
        >
            {/* NAVBAR */}
            <Navbar onThemeChange={(newTheme) => {setTheme(newTheme)}} />
            
            <div className="w-full h-screen flex flex-col justify-center place-items-center relative">
                <h1 className="text-balance mb-8 text-[3.5rem] font-bold drop-shadow-[0_0_5rem_rgba(255,255,255,1)]">Contact</h1>

                <h3 className="w-1/2 text-xl leading-[150%] text-center p-8 bg-foreground-20 rounded-xl">For any business inquiries, please reach out to us at this email:<br/> <a className="text-blue-500 transition-all duration-300 hover:underline" href= "mailto: solar.sync.team@gmail.com">solar.sync.team@gmail.com</a></h3>
            </div>
        </main>
    );
}