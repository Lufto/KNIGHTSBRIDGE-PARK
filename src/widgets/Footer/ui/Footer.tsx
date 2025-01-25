import { Slider, useSlider } from 'features/Slider'
import RowLeftIcon from 'shared/assets/icons/slider/row-left.svg'
import RowRightIcon from 'shared/assets/icons/slider/row-right.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Footer.module.scss'

interface FooterProps {
	className?: string;
}

export type sliderItems = {
	title: string;
	description: string;
	link: string;
	linkText: string;
}

export const sliderItems: sliderItems[] = [
  { title: "БОЛЬШАЯ БАЗА", description: "У нас самая большая база актуальных и эксклюзивных объектов элитной недвижимости", link: "#", linkText: "Посмотреть" },
  { title: "НАДЁЖНОСТЬ", description: "Мы гарантируем абсолютную безопасность и конфиденциальность по сделкам", link: "#", linkText: "Узнать" },
  { title: "ОПЫТ", description: "Наша команда имеет огромный опыт продаж недвижимости в элитном сегменте", link: "#", linkText: "Изучить" },
  { title: "ЗАКРЫТЫЕ ПРЕДЛОЖЕНИЯ", description: "Есть объекты, которые предлагаем только мы", link: "#", linkText: "Получить" },
];

export const Footer = ({className} : FooterProps) => {
	const { sliderRef, nextSlide, prevSlide, currentIndex, visibleCount } = useSlider(sliderItems.length);

	return (
		<footer className={classNames(cls.Footer, {}, [className])}>
			<div className="container col">
				<div className={classNames(cls.footer__wrap)}>
					<div className={classNames(cls.footer__title)}>
						<h2>ОСОБЕННОСТИ РАБОТЫ</h2>
						<h3>КОМПАНИИ SAFFARI ESTATE</h3>
					</div>
					<div className={classNames(cls.footer__slider_row)}>
						<button 
							className={classNames(cls.footer__slider_row_btn)}
							onClick={prevSlide}
							disabled={currentIndex === 0}
						>
							<RowLeftIcon />
						</button>

						<button 
							className={classNames(cls.footer__slider_row_btn)} 
							onClick={nextSlide}
							disabled={currentIndex + visibleCount === sliderItems.length - 1}
						>
							<RowRightIcon />
						</button>
					</div>
				</div>
				
				<Slider items={sliderItems} sliderRef={sliderRef}/>
			</div>
		</footer>
	)
};
