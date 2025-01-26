import { useCallback, useState } from 'react'
import custom from 'shared/assets/map/customization.json'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppSelector } from 'shared/store/hooks/hooks'
import {
  YMap,
  YMapComponentsProvider,
  YMapCustomClusterer,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker
} from 'ymap3-components'
import { apiKey } from '../model/helpers'
import { GeoJSONPointFeature } from '../types/TMap'
import cls from './Map.module.scss'


interface MapProps {
  className?: string;
  filter: string;
}

export const Map = ({className, filter} : MapProps) => {
  const [location] = useState({ center: [37.570034, 55.721255], zoom: 14 });

  const points = useAppSelector((state) => state.points.points);


  const marker = useCallback(
    (feature: GeoJSONPointFeature) => {
      if (feature.description?.title !== filter && filter !== 'Все' ) {
        return null;
      }
      return (
        <YMapMarker key={feature.id} coordinates={feature.geometry.coordinates}>
          <div
            className={classNames(
              cls.mark, 
              { [cls.circle]: feature.type !== 'main' }, 
              [cls[feature.type]]
            )}
          >
          </div>
        </YMapMarker>
      );
    },
    [filter]
  );

  const cluster = useCallback(
    (coordinates: number[], features: GeoJSONPointFeature[]) => {
      let cur = 0

      features.filter((feature) => {
        const matchesFilter = feature.description?.title === filter || filter === 'Все';
        if (matchesFilter) {
          cur += 1;
        }
        return matchesFilter;
      });
  
      if (cur === 0) {
        return null;
      }

      return (
        <YMapMarker coordinates={coordinates}>
            <div
              className={classNames(
                cls.mark, 
                {}, 
                [cls.circle]
              )}
            >
              {cur}
            </div>
          </YMapMarker>
      )
    }
    ,
    [filter]
  );


  return (
    <div className={classNames(cls.map)}>
      <YMapComponentsProvider apiKey={apiKey} lang="en_RU">
        <YMap key="map" location={location} mode="vector">
        <YMapCustomClusterer
            marker={marker}
            cluster={cluster}
            gridSize={64}
            features={points}
          />
          <YMapDefaultSchemeLayer customization={custom} />
          <YMapDefaultFeaturesLayer />
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
};