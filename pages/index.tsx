import Image from "next/image";
import { Inter } from "next/font/google";
import LightDarkButton from "@/components/light-dark-button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <LightDarkButton />
            <h1 className="font-bold">Solar Sync</h1>
        </div>
    );
}
