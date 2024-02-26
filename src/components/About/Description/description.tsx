import styles from '@/components/About/Description/description.module.css'

export default function Description() {
    return (
        <div className={styles['body']}>
            <div className={styles['body-title']}>Why we started?</div>
            <div className={styles['body-description']}>
                Lorem ipsum dolor sit amet consectetur. Neque urna cursus
                blandit faucibus nisi pharetra praesent. Fringilla diam
                vestibulum neque at tristique in at faucibus. Diam lacus egestas
                vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper
                et faucibus sit eu lacus cursus. Lorem ipsum dolor sit amet
                consectetur. Neque urna cursus blandit faucibus nisi pharetra
                praesent. Fringilla diam vestibulum neque at tristique in at
                faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
            </div>
            <div className={styles['body-block-car']}>
                <div className={styles['body-block-title-car']}>
                    <img src='https://carrectly.s3.amazonaws.com/public/about/car-audi.webp'></img>
                </div>
                <div className={styles['body-block-description-car']}>
                    <div className={styles['description-block']}>
                        <div className={styles['description-block-title']}>
                            <></>
                            <img src='https://carrectly.s3.amazonaws.com/public/about/about-description.webp'></img>
                        </div>
                        <div className={styles['description-block-title-name']}>
                            One stop shop
                        </div>
                        <div
                            className={
                                styles['description-block-title-description']
                            }
                        >
                            Get everything done in one place, everything you
                            need, we help to solve it all PLUS on demand, free
                            pick up and return, on your schedule, anywhere in
                            chicago,(accomodating and reliable experts)
                        </div>
                    </div>
                    <div className={styles['description-block']}>
                        <div className={styles['description-block-title']}>
                            <></>
                            <img src='https://carrectly.s3.amazonaws.com/public/about/about-description.webp'></img>
                        </div>
                        <div className={styles['description-block-title-name']}>
                            One stop shop
                        </div>
                        <div
                            className={
                                styles['description-block-title-description']
                            }
                        >
                            Get everything done in one place, everything you
                            need, we help to solve it all PLUS on demand, free
                            pick up and return, on your schedule, anywhere in
                            chicago,(accomodating and reliable experts)
                        </div>
                    </div>
                    <div className={styles['description-block']}>
                        <div className={styles['description-block-title']}>
                            <></>
                            <img src='https://carrectly.s3.amazonaws.com/public/about/about-description.webp'></img>
                        </div>
                        <div className={styles['description-block-title-name']}>
                            One stop shop
                        </div>
                        <div
                            className={
                                styles['description-block-title-description']
                            }
                        >
                            Get everything done in one place, everything you
                            need, we help to solve it all PLUS on demand, free
                            pick up and return, on your schedule, anywhere in
                            chicago,(accomodating and reliable experts)
                        </div>
                    </div>
                </div>

                <div className={styles['body-description-2']}>
                    <img src='https://carrectly.s3.amazonaws.com/public/about/about-background.webp'></img>
                </div>
                <div className={styles['body-description-2-description']}>
                    Lorem ipsum dolor sit amet consectetur. Neque urna cursus
                    blandit faucibus nisi pharetra praesent. Fringilla diam
                    vestibulum neque at tristique in at faucibus. Diam lacus
                    egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc
                    ullamcorper et faucibus sit eu lacus cursus.
                </div>
                <div className={styles['block-brands']}>
                    <img src='https://carrectly.s3.amazonaws.com/public/about/Brand-1.webp'></img>
                    <img src='https://carrectly.s3.amazonaws.com/public/about/Brand-2.webp'></img>
                    <img src='https://carrectly.s3.amazonaws.com/public/about/Brand-3.webp'></img>
                </div>
            </div>
        </div>
    )
}
export { Description }
