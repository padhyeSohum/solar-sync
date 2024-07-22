import { Inter } from "next/font/google";
import Image from "next/image";
import PrototypeLightImg from "../public/prototype-light.png";
import PrototypeDarkImg from "../public/prototype-dark.png";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
type Theme = "light" | "dark";

export default function Home() {
    const [theme, setTheme] = useState<Theme>();

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-evenly p-24 pt-0 ${inter.className}`}
        >
            {/* NAVBAR */}
            <Navbar onThemeChange={(newTheme) => {setTheme(newTheme)}}/>
            
            {/* HERO SECTION */}
            <div className="w-full h-screen flex flex-col justify-center relative">
                <div className="flex flex-row place-items-center justify-between">
                    <div className="w-2/3 font-bold">
                        <h1 className="text-balance mb-8 text-[3.5rem]">
                            Roof tiles that are<br/>
                            <span className="inline-block gradient-underline">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "adaptive.",
                                            "reliable.",
                                            "cost-effective.",
                                            "robust.",
                                            ""
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                        <h2 className="w-5/6 text-2xl leading-[150%]">
                            Roof tiles that adapt to the outside temperature, allowing you to stay comfortable in your home without the need for AC.
                        </h2>
                    </div>
                    <div className={`select-none rounded-xl animate-float ${theme == "dark" ? "drop-shadow-[0_0_10rem_rgba(255,255,255,1)]" : "drop-shadow-[0_0_10rem_rgba(0,0,0,1)]"}`}>
                        {
                        theme == "light" ?
                            <Image src={PrototypeLightImg} alt="prototype" width={700} height={350} className="" />
                        :
                            <Image src={PrototypeDarkImg} alt="prototype" width={700} height={350} className="" />
                        }
                    </div>
                </div>

                <div className="absolute bottom-16 w-full animate-bounce">
                    <div className="w-full flex justify-center">
                        <Link href="#about">
                            <button className="text-xl p-2 px-4 text-foreground bg-foreground-20 rounded-full font-bold select-none">
                                V
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div id="about" className="w-full flex flex-col justify-center place-items-center relative">
                <h1 className="text-[3rem] font-bold mb-8">About</h1>
                <div className="w-full grid grid-cols-3 gap-8">
                    <div className="bg-foreground-20 rounded-xl p-8 text-pretty">
                        <h2 className="text-[2rem] font-bold">Objective</h2>
                        <p>
                            In Canada, most roofs are dark-coloured. While being useful by absoring heat in the winter, they absorb excess heat from the sun in summer, greatly increasing air conditioning costs to bring the temperature back down.<br/><br/> <span className="font-bold">There is a growing need in Canada to have dynamic roofs that can adapt to all climates and environments.</span>
                        </p>
                    </div>

                    <div className="bg-foreground-20 rounded-xl p-8 text-pretty">
                        <h2 className="text-[2rem] font-bold">Product</h2>
                        <p>
                            Solar Sync is a cost-effective, reliable, and adaptive roof tile system. It utilizes tungsten-doped vanadium dioxide to best utilize the best of both white and black coloured roofs.
                            The vanadium dioxide film on the roof tiles is designed to change its colour under certain temperatures.
                            By treating it with variable amounts of tungsten, we can change the temperature at which the roof tiles will change its spectral properties.
                            These roof tiles work just like regular roof tiles, and can be installed directly onto roofs.
                        </p>
                    </div>

                    <div className="bg-foreground-20 rounded-xl p-8 text-pretty">
                        <h2 className="text-[2rem] font-bold">Benefits</h2>
                            <ul className="list-disc" style={{ listStyleType: "disc" }}>
                                <li>
                                    <span className="font-bold">Cost-Effective</span>
                                    <br/>
                                    The raw materials used for the roof tiles are very affordable.    
                                </li>
                                <li>
                                    <span className="font-bold">Reliable</span>
                                    <br/>
                                    Solar Sync prides itself on using durable materials while keeping our products affordable. It is modular and as easy to install as any other roof tile.
                                </li>
                                <li>
                                    <span className="font-bold">Adaptive</span>
                                    <br/>
                                    Solar Sync adapts to all climate conditions by providing a customized roof tile system. The vanadium dioxide can be treated to adjust its properties in different temperatures.    
                                </li>
                                <li>
                                    <span className="font-bold">Available</span>
                                    <br/>
                                    Solar Sync can be quickly shipped to customers. It is durable and modular, allowing it to be transported with ease.
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
