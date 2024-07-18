import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return { theme, setTheme };
};