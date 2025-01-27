import { useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/lang/lang-dark.svg'
import i18n from 'shared/config/i18n/i18n'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
className?: string;
}

export const LanguageSwitcher = ({className} : LanguageSwitcherProps) => {
	const { theme } = useTheme()

	const toggle = async () => {
		i18n.changeLanguage( i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button 
			className={classNames(cls.LanguageSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			<DarkIcon/>
		</Button>
	)
};
