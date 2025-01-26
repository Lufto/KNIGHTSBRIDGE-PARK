import { classNames } from 'shared/lib/classNames/classNames'

import { SliderItem } from 'shared/store/types/TStore'
import cls from './Slider.module.scss'

interface SliderProps {
	className?: string;
	items: SliderItem[];
	sliderRef: React.RefObject<HTMLUListElement>;
}

export const Slider = ({className, items, sliderRef} : SliderProps) => {
	return (
		<div className={classNames(cls.slider_container, {}, [className])}>
			<ul className={classNames(cls.slider_wrap)} ref={sliderRef}>
			{items.map((item, index) => (
              <li key={index} className={classNames(cls.slider_item)}>
                <span>{`0${index + 1}`}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href={item.link}>{item.linkText}</a>
              </li>
            ))}
			</ul>
		</div>
	)
};
