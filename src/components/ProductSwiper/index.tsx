import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Thumbs } from 'swiper/modules';
import { useState, useContext } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { SwiperContext } from '../../context/SwiperContext';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/thumbs';
import s from './styles.module.scss';

// Тип для массива изображений
type ImagePath = string;

export default function ProductSwiper() {
    // Типизируем состояние Swiper
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const context = useContext(SwiperContext);

    if (!context) {
        throw new Error('SomeComponent must be used within a SwiperProvider');
    }
    
    const { mainSwiper, setMainSwiper, indicators, setIndicators } = context;

    const images: ImagePath[] = [
        'product-images/image1.png',
        'product-images/image2.png',
        'product-images/image3.png',
        'product-images/image1.png',
    ];

    return (
        <div className={s.product_swiper}>
            {/* Основной Swiper */}
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Thumbs]}
                className={s.swiper}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={(swiper) => setMainSwiper(swiper)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={s.swiper_slider}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Миниатюры */}
            <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                slidesPerView={4}
                spaceBetween={10}
                modules={[Thumbs]}
                className={s.thumbs_swiper}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={s.thumbs_slider}>
                        <img src={image} alt={`Thumb ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
