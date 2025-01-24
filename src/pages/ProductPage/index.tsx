import s from './styles.module.scss'
import ProductSwiper from '../../components/ProductSwiper'
import { SwiperContext } from '../../context/SwiperContext'
import { useContext, useState } from 'react'

export default function ProductPage() {
    const [count, setCount] = useState<number>(1);
    const maxCount = 10;
    const minCount = 1;

    const increment = (): void => setCount((prevCount) => prevCount === maxCount ? maxCount : prevCount + 1);
    const decrement = (): void => setCount((prevCount) => prevCount === minCount ? minCount : prevCount - 1);

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
                        <h1 className={s.product_title}>Car Floor Mats</h1>
                        <div className={s.stars_box}>
                            <img src="/star.svg" alt="star" />
                            <img src="/star.svg" alt="star" />
                            <img src="/star.svg" alt="star" />
                            <img src="/star.svg" alt="star" />
                            <img src="/half-star.svg" alt="star" />
                        </div>
                        <p className={s.product_rate}>Rated 4.8 by 53 customers</p>
                        <p className={s.product_price}>₴1,520.00</p>
                        <p>Color Name: {}</p>
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
                        <div className={s.product_counter}>
                            <button className={s.counter_decrement} onClick={decrement}>-</button>  
                            <h2>{count}</h2>
                            <button className={s.counter_increment} onClick={increment}>+</button>
                        </div>
                        <button className={s.btn_buy_it_now}>BUY IT NOW</button>
                        <button className={s.btn_add_to_cart}>ADD TO CART</button>
                    </div>
                </div>
                <div className={s.product_secondary_box}></div>
            </div>
        </div>
    )
}