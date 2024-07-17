import useTheme from "@/hooks/use-theme";

export default function LightDarkButton() {

    const { setTheme } = useTheme();

    return (
        <div className="fixed top-4 right-4 rounded-lg">
            <button 
                className="p-4 rounded-l-lg border-2 border-foreground-20 border-r-[1px] hover:bg-foreground-20 transition-all duration-500"
                onClick={() => setTheme("light")}
            >
                🔥
            </button>
            <button
                className="p-4 rounded-r-lg border-2 border-foreground-20 border-l-[1px] hover:bg-foreground-20 transition-all duration-500"
                onClick={() => setTheme("dark")}
            >
                🧊
            </button>
        </div>
    );
}