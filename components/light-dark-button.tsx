import useTheme from "@/hooks/use-theme";

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

    return (
        <div className="fixed top-4 right-4 rounded-lg text-xl">
            <button 
                className="p-4 rounded-l-lg border-2 border-foreground-20 border-r-[1px] hover:bg-foreground-20 transition-all duration-500"
                onClick={() => handleChange("light")}
            >
                🔥
            </button>
            <button
                className="p-4 rounded-r-lg border-2 border-foreground-20 border-l-[1px] hover:bg-foreground-20 transition-all duration-500"
                onClick={() => handleChange("dark")}
            >
                🧊
            </button>
        </div>
    );
}