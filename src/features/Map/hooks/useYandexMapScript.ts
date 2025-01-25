import { useEffect } from 'react'

export const useYandexMapScript = () => {
  useEffect(() => {
    // Удаляем старый скрипт, если он существует
    const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Добавляем новый скрипт
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=6fe690d5-4d2f-4f11-9277-867bfa9b3292&lang=en_RU`;
    script.async = true;
    script.onload = () => {
      console.log('Yandex Map Script loaded');
    };
    document.body.appendChild(script);
  }, []);
};
