import { Inter } from "next/font/google";
import LightDarkButton from "@/components/light-dark-button";
import Image from "next/image";
import PrototypeImg from "../public/prototype.png";
import { useState } from "react";
import { AppBar, HeaderOffset, Logo, Toolbar } from "./styled";

const inter = Inter({ subsets: ["latin"] });
type Theme = "light" | "dark";

export default function Home() {

    const [theme, setTheme] = useState<Theme>() 

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-evenly px-24 ${inter.className}`}
        >
            <LightDarkButton onThemeChange={(theme) => {setTheme(theme)}}/>

            {/* NAVBAR */}
            {/* <div>
                <AppBar>
                    <Toolbar component="div" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Logo className="py-4">Solar Sync</Logo>
                        <nav className="relative select-none lg:flex lg:items-stretch w-full py-4">
                            <div className="flex flex-no-shrink items-stretch h-12 justify-normal">
                                <a href="#"
                                    className="group rounded-lg border border-transparent px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 justify-items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h2 className={`mb-3 text-2xl font-semibold`}>
                                        Section 1{" "}
                                    </h2>
                                </a>

                                <a href="#"
                                    className="group rounded-lg border border-transparent px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 justify-items-center margin-left-7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h2 className={`mb-3 text-2xl font-semibold`}>
                                        Section 2{" "}
                                    </h2>
                                </a>
                            </div>
                        </nav>
                    </Toolbar>
                </AppBar>
                <HeaderOffset />
            </div> */}
            
            {/* HERO SECTION */}
            <div className="w-full h-screen flex flex-col justify-center relative">
                <div className="flex flex-row place-items-center justify-between">
                    <div className="w-2/3 font-bold">
                        <h1 className="text-balance mb-8 text-[3.5rem]">
                            Worrying about your house temperature, so you don&apos;t have to.
                        </h1>
                        <h2 className="w-5/6 text-3xl leading-[150%]">
                            Roof tiles that sync to the outside temperature, so you can be comfortable in your home.
                        </h2>
                    </div>
                    <div className={`rounded-xl animate-float ${theme == "dark" ? "drop-shadow-[0_0_10rem_rgba(255,255,255,1)]" : ""}`}>
                        <Image src={PrototypeImg} alt="prototype" width={700} height={350} className=""/>
                    </div>
                </div>

                <div className="absolute bottom-16 w-full animate-bounce">
                    <div className="w-full flex justify-center">
                        <a href="">
                            <button className="text-xl p-2 px-4 text-foreground bg-foreground-50 rounded-full font-bold">
                                V
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href=""
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        About{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about Solar Sync.
                    </p>
                </a>

                <a
                    href=""
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        The Team{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Meet our team of entrepreneurs and their grand vision of this project.
                    </p>
                </a>

                <a
                    href=""
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        FAQ{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Explore the most frequently asked questions.
                    </p>
                </a>

                <a
                    href=""
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Contact Us{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                        Interested? Get in touch!
                    </p>
                </a>
            </div>
        </main>
    );
}
