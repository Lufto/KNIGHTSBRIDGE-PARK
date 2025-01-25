import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Header.module.scss'

interface HeaderProps {
className?: string;
}

export const Header = ({className} : HeaderProps) => {
	return (
		<header className={classNames(cls.header, {}, [className])}>
			<div className="container">
				<h1>
					KNIGHTSBRIDGE PRIVATE PARK – ЭЛИТНЫЙ РАЙОН ЛОНДОНА В ЦЕНТРЕ 
				</h1>
			</div>
		</header>
	)
};
