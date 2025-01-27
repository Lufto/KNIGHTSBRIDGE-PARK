import { classNames } from 'shared/lib/classNames/classNames'

import { MapItem } from 'shared/ui/MapItem/MapItem'
import cls from './PointList.module.scss'
import { useTranslation } from 'react-i18next'

interface PointListProps {
	className?: string;
	counts: Record<string, number>;
  onFilter: (type: string) => void;
	activeFilter: string;
}

export const PointList = ({ className, counts, onFilter, activeFilter }: PointListProps) => {
	const { i18n } = useTranslation();
	
	return (
		<ul className={classNames(cls.point_list, {}, [className])}>
			{Object.entries(counts).map(([type, count], index) => (
				<MapItem 
					key={index} 
					text={type} 
					number={count} 
					onClick={() => onFilter(type)} 
					className={classNames('', { [cls.map__item_active]: activeFilter === type })}
				/>
			))}
		</ul>
	)
};

