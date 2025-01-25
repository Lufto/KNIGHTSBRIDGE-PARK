import { classNames } from 'shared/lib/classNames/classNames'

import { MapItem } from 'shared/ui/MapItem/MapItem'
import cls from './PointList.module.scss'

interface PointListProps {
	className?: string;
	counts: Record<string, number>;
  onFilter: (type: string) => void;
}

export const PointList = ({ className, counts, onFilter }: PointListProps) => {
	return (
		<ul className={classNames(cls.point_list, {}, [className])}>
			{Object.entries(counts).map(([type, count], index) => (
				<MapItem key={index} text={type} number={count} onClick={() => onFilter(type)} />
			))}
		</ul>
	)
};

