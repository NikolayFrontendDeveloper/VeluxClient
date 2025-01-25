import { createContext, useState, ReactNode } from 'react';
import { Swiper as SwiperClass } from 'swiper/types'; // Импорт SwiperClass

// Тип контекста
interface ContextType {
  mainSwiper: SwiperClass | null;               // Основной Swiper
  indicators: string[];                         // Цвета индикаторов
  setMainSwiper: (swiper: SwiperClass) => void; // Обновить основной Swiper
  setIndicators: (colors: string[]) => void;   // Обновить индикаторы
}

// Создаем сам контекст
export const Context = createContext<ContextType | undefined>(undefined);

// Провайдер контекста
export const Provider = ({ children }: { children: ReactNode }) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null); // Состояние для основного Swiper
  const [indicators, setIndicators] = useState<string[]>([]);            // Состояние для индикаторов

  return (
    <Context.Provider
      value={{
        mainSwiper,
        indicators,
        setMainSwiper,
        setIndicators,
      }}
    >
      {children}
    </Context.Provider>
  );
};
