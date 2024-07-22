import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import { useState, useEffect } from "react";
import useTheme from "@/hooks/use-theme";
import { FaSun, FaSnowflake } from "react-icons/fa";


type Theme = "light" | "dark";

interface NavbarProps {
    onThemeChange: (value: Theme) => void;
}

export default function Navbar({ onThemeChange }: NavbarProps) {
    const { setTheme } = useTheme();
    
    const handleChange = (newTheme: Theme) => {
        setTheme(newTheme);
        onThemeChange(newTheme);
    }

    useEffect(() => {
        setTheme("dark");
        onThemeChange("dark");
    }, [])

    const links = [
        {
            name: "Contact Us",
            link: "/contact",
        },
    ]
    return (
        <div className="w-full absolute top-0 flex justify-evenly z-10 place-items-center py-8">
            <Link href="/"><Image src={Logo} alt="Logo" width={100} height={50} className="hover:drop-shadow-[0_0_2rem_rgba(82,132,67,1)] transition-all" /></Link>
            <div className="rounded-lg text-xl">
                <button
                    className="p-4 rounded-l-lg border-2 border-foreground-20 border-r-[1px] hover:bg-foreground-20 transition-all duration-500 text-red-300"
                    onClick={() => handleChange("light")}
                >
                    <FaSun />
                </button>
                <button
                    className="p-4 rounded-r-lg border-2 border-foreground-20 border-l-[1px] hover:bg-foreground-20 transition-all duration-500 text-blue-400"
                    onClick={() => handleChange("dark")}
                >
                    <FaSnowflake />
                </button>
            </div>
            {links.map((data, i) => (
                <Link key={i} href={data.link} className="font-bold text-md transition-all ease-in-out duration-300 hover:bg-foreground-80 hover:text-background p-4 rounded-lg"><div>{data.name}</div></Link>
            ))}
        </div>
    )
}