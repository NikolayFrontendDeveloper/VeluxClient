import s from './styles.module.scss'
import Product from '../../components/Product'

export default function CatalogPage() {
    return (
        <div className="main_container">
            <div className={s.collections_box}>
                <p className={s.collections_title}>EXPLORE OUR PREMIUM GOODS</p>
                <div className={s.products_wrapper}>
                    <Product></Product>
                </div>
            </div>
        </div>
    )
}