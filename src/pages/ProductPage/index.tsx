import s from './styles.module.scss'
import ProductSwiper from '../../components/ProductSwiper'
import { SwiperContext } from '../../context/SwiperContext'
import { useContext } from 'react'

export default function ProductPage() {
    const context = useContext(SwiperContext);

    if (!context) {
        throw new Error('ProductSwiper must be used within a SwiperProvider');
    }

    const { mainSwiper, setMainSwiper, indicators, setIndicators } = context;

    const colorDots = [
        { color: 'pink', index: 0 },
        { color: 'black', index: 1 },
        { color: 'blue', index: 2 },
        { color: 'pink', index: 3 },
    ];

    return (
        <div className="main_container">
            <div className={s.product_container}>
                <div className={s.product_main_box}>
                    <ProductSwiper></ProductSwiper>
                    <div className={s.product_description_box}>
                        <div className={s.color_dots}>
                            {colorDots.map(({ color, index }) => (
                                <button
                                    key={index}
                                    className={s.dot}
                                    onClick={() => mainSwiper?.slideTo(index)} // Свайп к соответствующему слайду
                                >
                                    <div 
                                        className={s.dot_inner}
                                        style={{ backgroundColor: color }}
                                    ></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={s.product_secondary_box}></div>
            </div>
        </div>
    )
}