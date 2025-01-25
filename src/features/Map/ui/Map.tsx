import { memo, useCallback, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  YMap,
  YMapComponentsProvider,
  YMapCustomClusterer,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker
} from 'ymap3-components'
import custom from '../../../shared/assets/map/customization.json'
import { apiKey, location as LOCATION, points } from '../model/helpers'
import { GeoJSONPointFeature } from '../types/TMap'
import cls from './Map.module.scss'

interface MapProps {
  className?: string;
  filter: string;
}

// const useYandexMapScript = () => {
//   useEffect(() => {
//     if (typeof ymaps === 'undefined') {
//       const script = document.createElement('script');
//       script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=en_RU`;
//       script.async = true;
//       script.onload = () => {
//         // Инициализация карты
//       };
//       document.head.appendChild(script);
//     }
//   }, []);
// };

export const MapComponent = ({className, filter} : MapProps) => {
  // useYandexMapScript()
  const location = useMemo(() => LOCATION, []);

  const marker = useCallback(
    (feature: GeoJSONPointFeature) => {
      if (feature.description?.title !== filter && filter !== 'Все' ) {
        return null;
      }

      return (
        <YMapMarker key={feature.id} coordinates={feature.geometry.coordinates}>
          <div
            className={`mark ${feature.type} ${feature.type !== 'main' ? 'circle' : ''}`}
          >
          </div>
        </YMapMarker>
      );
    },
    [filter]
  );
  
  return (
    <div className={classNames(cls.map, {}, [className])}>
       <YMapComponentsProvider apiKey={apiKey} lang="en_RU">
        <YMap key="map" location={location} mode="vector">
          <YMapCustomClusterer
            marker={marker}
            gridSize={64}
            features={points}
          />
          <YMapDefaultSchemeLayer customization={custom} />
          <YMapDefaultFeaturesLayer />
        </YMap>
      </YMapComponentsProvider>
    </div>
  )
};

export const Map = memo(MapComponent);