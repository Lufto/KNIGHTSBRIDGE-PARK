import { Slider, useSlider } from 'features/Slider'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import RowLeftIcon from 'shared/assets/icons/slider/row-left.svg'
import RowRightIcon from 'shared/assets/icons/slider/row-right.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { fetchSliderItems } from 'shared/store/actions'
import { useAppDispatch, useAppSelector } from 'shared/store/hooks/hooks'
import cls from './Footer.module.scss'

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const { t } = useTranslation('footer');
  const dispatch = useAppDispatch();
  const sliderItems = useAppSelector((state) => state.slider.sliderItems);
  const { sliderRef, nextSlide, prevSlide, currentIndex, visibleCount, handleTouchStart, handleTouchMove, handleTouchEnd } = useSlider(sliderItems.length);

  useEffect(() => {
    dispatch(fetchSliderItems());
  }, [dispatch]);

  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
      <div className="container col">
        <div className={classNames(cls.footer__wrap)}>
          <div className={classNames(cls.footer__title)}>
            <h2>{t('ОСОБЕННОСТИ РАБОТЫ')}</h2>
            <h3>{t('КОМПАНИИ SAFFARI ESTATE')}</h3>
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

        <Slider
          items={sliderItems}
          sliderRef={sliderRef}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
        />
      </div>
    </footer>
  );
};
