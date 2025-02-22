import s from './styles.module.scss'

export default function Product() {
    return (
        <div className={s.product_box}>
            <a href="/product">
                <img className={s.product_img} src="/product-images/image1.png" alt="product image" />
                <div className={s.product_description_box}>
                    <p className={s.product_description}>Car Steering Wheel Cover</p>
                    <p className={s.product_price}>₴11.70</p>
                </div>
            </a>
            <button className={s.btn_add_product}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512" className={s.btn_add_product_icon}>
                    <circle cx="7" cy="22" r="2" fill="currentColor"/>
                    <circle cx="17" cy="22" r="2" fill="currentColor"/>
                    <path d="M22.984,6.018A3.675,3.675,0,0,0,20.364,5H5.654L5.391,2.938A3.328,3.328,0,0,0,2.087,0H1.5A1.5,1.5,0,0,0,0,1.5H0A1.5,1.5,0,0,0,1.5,3h.587a.331.331,0,0,1,.326.3l1.5,11.759A3.327,3.327,0,0,0,7.217,18H17.339a5.5,5.5,0,0,0,5.3-4.042l1.246-4.531A3.489,3.489,0,0,0,22.984,6.018ZM19.75,13.163A2.508,2.508,0,0,1,17.339,15H7.217a.329.329,0,0,1-.325-.3L6.037,8H20.514A.5.5,0,0,1,21,8.632Z" fill="currentColor"/>
                </svg>
                <p>Add to cart</p>
            </button>
        </div>
    )
}