import s from './styles.module.scss';

export default function HomePage() {
    return (
        <div className="main_container">
            <section className={s.car_section}>
                <img className={s.car_section_img} src="/car.jpg" alt="car image" />
                <div className={s.car_text_box}>
                    <p className={s.car_text_box_title}>FEEL THE ULTIMATE IN COMFORT</p>
                    <p className={s.car_text_box_description}>WHERE QUALITY MEETS INOVATION</p>
                    <a className={s.car_text_box_link_to_catalog} href="/shop">DISCOVER NOW</a>
                    <div className={s.guarantee14Days_box}>
                        <img className={s.guarantee_img} src="/guarantee.svg" alt="guarantee img" />
                        <p className={s.guarantee14Days}>14-day money-back guarantee included </p>
                    </div>
                </div>
            </section>
            <section className={s.reviews_section}>
                <div className={s.reviews_box}>
                    <div className={s.reviews_description_box}>
                        <div className={s.reviews_title_box}>
                            <div className={s.stars_box}>
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/half-star.svg" alt="star" />
                            </div>
                            <p className={s.reviews_title}>60+ 5 Star reviews</p>
                        </div>
                        <p className={s.reviews_title_descriptions}>WHAT OUR CUSTOMERS ARE SAYING</p>
                    </div>
                    <div className={s.review_items_box}>
                        <div className={s.review_item}>
                            <div className={s.review_time_top_box}>
                                <img className={s.review_item_img} src="https://xkimpi-im.myshopify.com/cdn/shop/files/gempages_541469339321107568-ef0532ba-40a1-4c11-ade7-afd6c2da1160.jpg?v=13809954442713822969" alt="review image" />
                                <p className={s.review_item_titel}>Too good to be true</p>
                                <p className={s.review_item_description}>If you're a car enthusiast, <span>Veluxe</span> store is a must-visit. I found the perfect set of all-weather floor mats for my SUV, and their prices are competitive. Well organized store and very good quality support. Answered all my questions and helped me with my choises. Thank you</p>
                            </div>
                            <div className={s.review_time_bottom_box}>
                                <div className={s.stars_box}>
                                    <img src="/star.svg" alt="star" />
                                    <img src="/star.svg" alt="star" />
                                    <img src="/star.svg" alt="star" />
                                    <img src="/star.svg" alt="star" />
                                    <img src="/star.svg" alt="star" />
                                </div>
                                <p className={s.review_item_description_author}>RYAN S. <span>/ 02.12.2024</span></p>
                            </div>
                        </div>
                        <div className={s.review_item}>
                            <div className={s.review_time_top_box}>
                                <img className={s.review_item_img} src="https://xkimpi-im.myshopify.com/cdn/shop/files/gempages_541469339321107568-8c6bc846-4258-42fc-8076-035001641be7.jpg?v=8727862166818127009" alt="review image" />
                                <p className={s.review_item_titel}>YOU'RE A LIFE-SAVER</p>
                                <p className={s.review_item_description}>I was impressed by the level of expertise and customer service at <span>Veluxe</span>. The staff is friendly and patient, helped my with my choice. They made sure I left the store with a product that met all my requirements.</p>
                            </div>
                            <div className={s.review_time_bottom_box}>
                                <div className={s.stars_box}>
                                    <img src="/star.svg" alt="star" />
                                    <img src="/star.svg" alt="star" />
                                    <img src="/star.svg" alt="star" />
                                    <img src="/star.svg" alt="star" />
                                    <img src="/star.svg" alt="star" />
                                </div>
                                <p className={s.review_item_description_author}>PATRICIA B. <span>/ 30.11.2024</span></p>
                            </div>
                        </div>
                        <div className={s.review_item}>
                            <div className={s.review_time_top_box}>
                                <img className={s.review_item_img} src="https://xkimpi-im.myshopify.com/cdn/shop/files/gempages_541469339321107568-ca4a2f07-ff8e-4790-abd3-30f191d6cbe3.jpg?v=11677607285737958139" alt="review image" />
                                <p className={s.review_item_titel}>Work well for my problem</p>
                                <p className={s.review_item_description}><span>Veluxe</span> is a find for everyone who loves their car and the comfort in it. The shop not only makes its products from ec-friendly materials, but also provides valuable recommendations. The shop's commitment to quality and customer satisfaction is commendable</p>
                            </div>
                        <div className={s.review_time_bottom_box}>
                            <div className={s.stars_box}>
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                                <img src="/star.svg" alt="star" />
                            </div>
                            <p className={s.review_item_description_author}>TRAVIS J. <span>/ 01.12.2024</span></p></div>                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}