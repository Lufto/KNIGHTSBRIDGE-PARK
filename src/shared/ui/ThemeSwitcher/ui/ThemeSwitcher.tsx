import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme/dark_icon.svg'
import LightIcon from 'shared/assets/icons/theme/light_icon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
className?: string;
}

export const ThemeSwitcher = ({className} : ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button 
			className={classNames(cls.ThemeSwitcher, {}, [className])} 
			onClick={toggleTheme}
			theme={ThemeButton.CLEAR}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon/>}	
		</Button>
	)
};
