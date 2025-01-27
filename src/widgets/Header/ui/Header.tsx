import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Header.module.scss'

interface HeaderProps {
className?: string;
}

export const Header = ({className} : HeaderProps) => {
	const location = useLocation();
	const { t } = useTranslation('header');
	return (
		<header className={classNames(cls.header, {}, [className])}>
			<div className={classNames(cls.header__container, {}, ["container"])}>
				<AppLink to={'/'}>
					<h1>
						{t('шапка')}
					</h1>
				</AppLink>
				
				{location.pathname !== '/' && 
				(
					<div className={classNames(cls.header__seatings, {}, [])}>
						<LanguageSwitcher/>
						<ThemeSwitcher/>
					</div>
				)}
			</div>
		</header>
	)
};
