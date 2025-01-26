import { Map } from 'features/Map'
import { PointList, useTerritoryFilter } from 'features/PointList'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Territory.module.scss'

interface TerritoryProps {
  className?: string;
}

export const Territory = ({className} : TerritoryProps) => {
  const { filter, counts, onFilter } = useTerritoryFilter();
  return (
    <section className={classNames(cls.territory, {}, [className])}>
      <div className={classNames(cls.container, {}, ['container'])}>
        <div className={classNames(cls.territory__info, {}, [])}>
          <h2>НА КАРТЕ</h2>
          <PointList counts={counts} onFilter={onFilter} />
        </div>
        <Map filter={filter} />
      </div>
    </section>
  )
};

