import { classNames } from 'shared/lib/classNames/classNames'

import cls from './MapItem.module.scss'

interface MapItemProps {
	className?: string;
	text: string;
	number: number;
	onClick: () => void;
}

export const MapItem = ({className, text, number, onClick} : MapItemProps) => {
	return (
		<li 
			className={classNames(cls.map__item, {}, [className])} 
			onClick={onClick}
		>
			
			{text.toUpperCase()} <span>{number}</span>
		</li>
	)
};