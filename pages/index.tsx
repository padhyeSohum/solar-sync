import { Inter } from "next/font/google";
import LightDarkButton from "@/components/light-dark-button";
import Image from "next/image";
import PrototypeLightImg from "../public/prototype-light.png";
import PrototypeDarkImg from "../public/prototype-dark.png";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import Logo from "../public/logo.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
type Theme = "light" | "dark";

export default function Home() {
    const [theme, setTheme] = useState<Theme>();

    const links = [
        {
            name: "Team",
            link: "/team",
        },
        {
            name: "FAQ",
            link: "/faq",
        },
        {
            name: "Contact Us",
            link: "/contact-us",
        },
    ]

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-evenly p-24 pt-0 ${inter.className}`}
        >
            {/* NAVBAR */}
            <div className="w-full absolute top-0 flex justify-evenly z-10 place-items-center py-8">
                <Link href="/"><Image src={Logo} alt="Logo" width={100} className="drop-shadow-[0_0_2rem_rgba(82,132,67,0.5)] hover:drop-shadow-[0_0_2rem_rgba(82,132,67,1)] transition-all" /></Link>
                {links.map((data, i) => (
                    <Link key={i} href={data.link} className="font-bold text-md transition-all ease-in-out duration-300 hover:bg-foreground-80 hover:text-background p-4 rounded-lg"><div>{data.name}</div></Link>
                ))}
                <LightDarkButton onThemeChange={(theme) => { setTheme(theme) }} />
            </div>
            
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
                            <button className="text-xl p-2 px-4 text-foreground bg-foreground-20 rounded-full font-bold">
                                V
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                <Link
                    href="#"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target=""
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
                </Link>

                <Link
                    href="#"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target=""
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
                </Link>

                <Link
                    href="#"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target=""
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
                </Link>
            </div>
        </main>
    );
}
