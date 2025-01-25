import { ReactNode } from 'react'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export interface ThemeProviderProps {
  children: ReactNode; 
}

export interface TTheme {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}