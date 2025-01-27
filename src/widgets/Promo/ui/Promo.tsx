import { classNames } from 'shared/lib/classNames/classNames'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './Promo.module.scss'

interface PromoProps {
	className?: string;
}

export const Promo = ({className} : PromoProps) => {
	const [active, setActive] = useState(false)
    const { t } = useTranslation('promo');

	return (
		<section className={classNames(cls.promo, { [cls.active]: active }, [className])}>
			<div className={classNames(cls.promo__container, {}, ["container"])}>
			<div className={cls.promo__consent_wrap}>
          <div className={cls.promo__info}>
            <ul>
              <li className={cls.promo__info_item}>
                <h3>
                {t('156')} <span>{t('м2')}</span>
                </h3>
                <p>{t('Площадь')}</p>
              </li>
              <li className={cls.promo__info_item}>
                <h3>{t('475')}</h3>
                <p>{t('Парковочных мест')}</p>
              </li>
              <li className={cls.promo__info_item}>
                <h3>
                {t('10')} <span>{t('мин')}</span>
                </h3>
                <p>{t('До метро Фрунзенская')}</p>
              </li>
              <li className={cls.promo__info_item}>
                <h3>
                {t('2')} <span>{t('га')}</span>
                </h3>
                <p>{t('Площадь')}</p>
              </li>
            </ul>

            <p className={cls.promo__info_text}>
              {t('Жилой комплекс')}  
            </p>
          </div>

          <button
            className={cls.promo__open_btn}
            onClick={() => setActive(!active)}
          >
            {t('УЗНАТЬ ПОДРОБНЕЕ')}
          </button>
        </div>

        <div className={cls.promo__picture}>
          <div className={cls.promo__picture_first}></div>

          <div className={cls.promo__picture_wrap}>
            <AppLink to={'about'} className={cls.promo__picture_second}>
            {t('Презентация')} <br/> {t('ЖК')}
            </AppLink>
            <AppLink to={'about'} className={cls.promo__picture_second}>
            {t('Типы')}
            </AppLink>
          </div>
        </div>
      </div>
    </section>
	)
};
