import { points } from 'features/Map'
import { useCallback, useMemo, useState } from 'react'

export const useTerritoryFilter = () => {
  const [filter, setFilter] = useState('Все');

  const counts = useMemo(() => {
    const result: Record<string, number> = {};
    points.forEach((point) => {
      const type = point.description?.title;
      if (type) {
        result[type] = (result[type] || 0) + 1;
      }
    });
    return result;
  }, [points]);

  const onFilter = useCallback((type: string) => {
    setFilter((prev) => (prev !== type ? type : 'Все'));
  }, []);

  return { filter, counts, onFilter };
};
