import s from './styles.module.scss'
import ProductSwiper from '../../components/ProductSwiper'

export default function ProductPage() {
    return (
        <div className="main_container">
            <div className={s.product_container}>
                <div className={s.product_main_box}>
                    <ProductSwiper></ProductSwiper>
                    <div className={s.product_description_box}></div>
                </div>
                <div className={s.product_secondary_box}></div>
            </div>
        </div>
    )
}