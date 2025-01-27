import { createContext } from 'react'
import { TTheme } from '../types/TTheme'

export const ThemeContext = createContext<TTheme>({}) 

export const LOCAL_STORAGE_THEME_KEY = 'theme';

