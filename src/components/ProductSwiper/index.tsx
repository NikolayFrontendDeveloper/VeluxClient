import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types'; // Импорт типов Swiper
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/thumbs';
import s from './styles.module.scss';
import './swiper.css';

export default function ProductSwiper() {
    // Типизируем состояние
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    const images = [
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
                thumbs={{ swiper: thumbsSwiper }} // Привязка к миниатюрам
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={s.swiper_slider}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Миниатюры */}
            <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)} // Установка Swiper в состояние
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
