import { Map } from 'features/Map'
import { PointList, useTerritoryFilter } from 'features/PointList'
import { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { fetchPoints } from 'shared/store/actions'
import { useAppDispatch } from 'shared/store/hooks/hooks'
import cls from './Territory.module.scss'

interface TerritoryProps {
  className?: string;
}

export const Territory = ({className} : TerritoryProps) => {
  const { filter, counts, onFilter } = useTerritoryFilter();

  const dispatch = useAppDispatch();

  useEffect(() => {  
    dispatch(fetchPoints());       
  }, [dispatch]);



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

