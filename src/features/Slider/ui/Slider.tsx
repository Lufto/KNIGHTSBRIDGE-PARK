import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { SliderItem } from 'shared/store/types/TStore'
import cls from './Slider.module.scss'

interface SliderProps {
  className?: string;
  items: SliderItem[];
  sliderRef: React.RefObject<HTMLUListElement>;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
}

export const Slider = ({
  className,
  items,
  sliderRef,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}: SliderProps) => {
  const { i18n } = useTranslation();

  return (
    <div className={classNames(cls.slider_container, {}, [className])}>
      <ul
        className={classNames(cls.slider_wrap)}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <li key={index} className={classNames(cls.slider_item)}>
            <span>{`0${index + 1}`}</span>
            <h4>{i18n.language === 'ru' ? item.title.ru : item.title.en}</h4>
            <p>{i18n.language === 'ru' ? item.description.ru : item.description.en}</p>
            <a href={item.link}>{i18n.language === 'ru' ? item.linkText.ru : item.linkText.en}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};