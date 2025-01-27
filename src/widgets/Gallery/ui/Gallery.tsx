import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import cls from './Gallery.module.scss'

interface GalleryProps {
className?: string;
}

export const Gallery = ({className} : GalleryProps) => {
	const { t } = useTranslation('gallery');
	return (
		<div className={classNames(cls.gallery, {}, [className])}>
			<div className={classNames(cls.gallery__container, {}, ['container'])}>
				<h2 className={classNames(cls.gallery__title)}>{t("НАША ГАЛЕРЕЯ")}</h2>

				<ul>
					<li>
						<img src="https://images.cdn-cian.ru/images/69/knightsbridge-private-park-moskva-jk-9698-7.jpg" alt="KNIGHTSBRIDGE PRIVATE PARK" loading="lazy"/>
					</li>
					<li>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpe9CvQqOYfa_OQrRscdYq0bn8zr3ctmjiVqV0Ba6HNLJ6D4NRib76xnxsZvc4XBsA5U&usqp=CAU" alt="KNIGHTSBRIDGE PRIVATE PARK" loading="lazy"/>
					</li>
					<li>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMudmFx0k_haZJ7LxKHjZndpy96wYHC-yAQ&s" alt="KNIGHTSBRIDGE PRIVATE PARK" loading="lazy"/>
					</li>
					<li>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZQKGO7chY7BtTioG5IKyau4CWeQR6zxvBQ&s" alt="KNIGHTSBRIDGE PRIVATE PARK" loading="lazy"/>
					</li>
				</ul>
			</div>
		</div>
	)
};
