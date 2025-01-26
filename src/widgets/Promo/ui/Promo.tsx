import { classNames } from 'shared/lib/classNames/classNames'

import { useState } from 'react'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './Promo.module.scss'

interface PromoProps {
	className?: string;
}

export const Promo = ({className} : PromoProps) => {
	const [active, setActive] = useState(false)

	return (
		<section className={classNames(cls.promo, { active: 'active' }, [className])}>
			<div className="container">
			<div className={cls.promo__consent_wrap}>
          <div className={cls.promo__info}>
            <ul>
              <li className={cls.promo__info_item}>
                <h3>
                  156 - 636 <span>м2</span>
                </h3>
                <p>Площадь квартир</p>
              </li>
              <li className={cls.promo__info_item}>
                <h3>475</h3>
                <p>Парковочных мест</p>
              </li>
              <li className={cls.promo__info_item}>
                <h3>
                  10 <span>мин</span>
                </h3>
                <p>До метро Фрунзенская</p>
              </li>
              <li className={cls.promo__info_item}>
                <h3>
                  2 <span>га</span>
                </h3>
                <p>Площадь собственного парка</p>
              </li>
            </ul>

            <p className={cls.promo__info_text}>
              Жилой комплекс из четырех клубных домов класса де-люкс в английском
              стиле, расположенный в собственном парке площадью 3 га в районе
              Хамовники. Авторы интерьеров жилого копмлекса, и дизайна частного
              парка – дизайнеры мировой величины. Так, общественные зоны
              оформляет Дэвид Линли, племянник королевы Великобритании и глава
              компании LINLEY, а настоящий английский парк для жителей.
            </p>
          </div>

          <button
            className={cls.promo__open_btn}
            onClick={() => setActive(!active)}
          >
            УЗНАТЬ ПОДРОБНЕЕ
          </button>
        </div>

        <div className={cls.promo__picture}>
          <div className={cls.promo__picture_first}></div>

          <div className={cls.promo__picture_wrap}>
            <AppLink to={'about'} className={cls.promo__picture_second}>
              Презентация <br /> ЖК Knightsbridge Private Рark
            </AppLink>
            <AppLink to={'about'} className={cls.promo__picture_second}>
              Типы планировок апартаментов
            </AppLink>
          </div>
        </div>
      </div>
    </section>
	)
};
