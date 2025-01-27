import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'shared/store/hooks/hooks'

export const useTerritoryFilter = () => {
  const { i18n } = useTranslation();
  const [filter, setFilter] = useState('Все');
  const points = useAppSelector((state) => state.points.points);

  const counts = useMemo(() => {
    const result: Record<string, number> = {};
    points.forEach((point) => {
      const description = point.description;
      if (description) {
        
        const languageKey: keyof typeof description = `title_${i18n.language as 'ru' | 'en'}`;
        const type = description[languageKey] || description.title_ru || description.title_en;
        if (type) {
          result[type] = (result[type] || 0) + 1;
        }
      }
    });
    return result;
  }, [points, i18n.language]); 

  const onFilter = useCallback((type: string) => {
    setFilter((prev) => (prev !== type ? type : 'Все'));
  }, []);

  return { filter, counts, onFilter };
};
