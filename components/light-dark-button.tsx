import useTheme from "@/hooks/use-theme";
import { useEffect } from "react";
import { FaSun, FaSnowflake } from "react-icons/fa";

type Theme = "light" | "dark";

interface ButtonProps {
    onThemeChange: (value: Theme) => void;
}

export default function LightDarkButton({ onThemeChange }: ButtonProps) {

    const { setTheme } = useTheme();

    const handleChange = (newTheme: Theme) => {
        setTheme(newTheme);
        onThemeChange(newTheme);
    }

    useEffect(() => {
        setTheme("dark");
        onThemeChange("dark");
    }, [])

    return (
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
    );
}