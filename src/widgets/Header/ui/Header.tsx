import { classNames } from 'shared/lib/classNames/classNames'

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

	return (
		<header className={classNames(cls.header, {}, [className])}>
			<div className="container">
				<AppLink to={'/'}>
					<h1>
						KNIGHTSBRIDGE PRIVATE PARK – ЭЛИТНЫЙ РАЙОН ЛОНДОНА В ЦЕНТРЕ 
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
