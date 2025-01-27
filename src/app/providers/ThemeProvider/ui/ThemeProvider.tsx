import { FC, useEffect, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext'
import { Theme, ThemeProviderProps } from '../types/TTheme'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null;
    const defaultTheme = storedTheme !== null ? storedTheme : (isDarkTheme ? Theme.DARK : Theme.LIGHT);

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        document.body.className = theme === Theme.DARK ? 'dark-theme' : 'light-theme';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
