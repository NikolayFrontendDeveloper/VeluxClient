import s from './styles.module.scss';

export default function HomePage() {
    return (
        <div className="main_container">
            <section className={s.car_section}>
                <img src="/car.jpg" alt="car image" />
                <div className={s.car_text_box}>
                    <p className={s.car_text_box_title}>FEEL THE ULTIMATE COMFORT</p>
                    <p className={s.car_text_box_description}>WHERE QUALITY MEETS INOVATION</p>
                    <a className={s.car_text_box_link_to_catalog} href="/">DISCOVER NOW</a>
                    <div className={s.guarantee14Days_box}>
                        <img className={s.guarantee_img} src="" alt="guarantee img" />
                        <p className={s.guarantee14Days}>14-day money-back guarantee included </p>
                    </div>
                </div>
            </section>
        </div>
    )
}