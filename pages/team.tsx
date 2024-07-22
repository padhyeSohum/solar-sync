import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });
type Theme = "light" | "dark";

export default function Team () {
    const [theme, setTheme] = useState<Theme>();
    
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-evenly p-24 pt-0 ${inter.className}`}
        >
            {/* NAVBAR */ }
            <Navbar onThemeChange={(newTheme) => { setTheme(newTheme) }}/>
        </main>
    )
}