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
                <h1>About</h1>

                <h2>Synopsis</h2>
                <p>In Canada, due to most roofs being black, they absorb heat from the sun in summer, greatly increasing air conditioning costs. <br/>
                Therefore, Solar Sync develops a system that is cost-effective, reliable, and adaptive.
                </p>

                <h2>Product</h2>
                <p>
                    Solar Sync is a cost-effective, reliable, and adaptive roof tile system. It utilizes tungsten-doped vanadium dioxide to best utilize the best of both white and black coloured roofs.
                    <br/>
                    The vanadium dioxide film on the roof tiles is designed to change its colour under certain temperatures.
                    <br/>
                    By treating it with variable amounts of tungsten, we can change the temperature at which the roof tiles will change its spectral properties. 
                    <br/>
                    These roof tiles work just like regular roof tiles, and can be installed directly onto roofs.
                </p>

                <h2></h2>
            </div>

        </main>
    );
}