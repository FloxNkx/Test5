'use client'

import styles from './Reviews.module.css'
import Link from 'next/link'

export default function Reviews() {
    return (
        <div className={styles['reviews-body']}>
            <div className={styles['reviews-body-background']}>
                <img
                    src='https://carrectly.s3.amazonaws.com/public/main/Rewievs-background.webp'
                    alt='background'
                />
            </div>
            <div className={styles['reviews-title']}>Reviews</div>
            <div className={styles['reviews-card']}>
                <div className={styles['reviews-card-1']}>
                    <div className={styles['reviews-card-1-title']}>
                        <div className={styles['reviews-card-1-title-points']}>
                            5.0
                        </div>
                        <div className={styles['reviews-card-1-title-stars']}>
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars1'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars2'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars3'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars4'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars5'
                            />
                        </div>
                    </div>
                    <div className={styles['reviews-card-line']}>
                        <div className={styles['reviews-card-1-description']}>
                            Lorem ipsum dolor sit amet consectetur. Neque urna
                            cursus blandit faucibus nisi pharetra praesent.
                            Fringilla diam vestibulum neque at tristique in at
                            faucibus. Diam lacus egestas vitae ullamcorper donec
                            aliquet. Rhoncus massa nunc ullamcorper et faucibus
                            sit eu lacus cursus.
                        </div>
                        <div className={styles['reviews-card-1-source']}>
                            from Facebook
                        </div>
                        <div className={styles['reviews-card-1-owner']}>
                            Alex
                        </div>
                        <div className={styles['reviews-card-1-founder']}>
                            Co-Founder at Agency
                        </div>
                    </div>
                </div>
                <div className={styles['reviews-card-2']}>
                    <div className={styles['reviews-card-1-title']}>
                        <div className={styles['reviews-card-1-title-points']}>
                            5.0
                        </div>
                        <div className={styles['reviews-card-1-title-stars']}>
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars1'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars2'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars3'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars4'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars5'
                            />
                        </div>
                    </div>

                    <div className={styles['reviews-card-line']}>
                        <div className={styles['reviews-card-1-description']}>
                            Lorem ipsum dolor sit amet consectetur. Neque urna
                            cursus blandit faucibus nisi pharetra praesent.
                            Fringilla diam vestibulum neque at tristique in at
                            faucibus. Diam lacus egestas vitae ullamcorper donec
                            aliquet. Rhoncus massa nunc ullamcorper et faucibus
                            sit eu lacus cursus.
                        </div>
                        <div className={styles['reviews-card-1-source']}>
                            from Facebook
                        </div>
                        <div className={styles['reviews-card-1-owner']}>
                            Alex
                        </div>
                        <div className={styles['reviews-card-1-founder']}>
                            Co-Founder at Agency
                        </div>
                    </div>
                </div>
                <div className={styles['reviews-card-3']}>
                    <div className={styles['reviews-card-1-title']}>
                        <div className={styles['reviews-card-1-title-points']}>
                            5.0
                        </div>
                        <div className={styles['reviews-card-1-title-stars']}>
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars1'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars2'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars3'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars4'
                            />
                            <img
                                src='https://carrectly.s3.amazonaws.com/public/main/Stars.webp'
                                alt='stars5'
                            />
                        </div>
                    </div>
                    <div className={styles['reviews-card-line']}>
                        <div className={styles['reviews-card-1-description']}>
                            Lorem ipsum dolor sit amet consectetur. Neque urna
                            cursus blandit faucibus nisi pharetra praesent.
                            Fringilla diam vestibulum neque at tristique in at
                            faucibus. Diam lacus egestas vitae ullamcorper donec
                            aliquet. Rhoncus massa nunc ullamcorper et faucibus
                            sit eu lacus cursus.
                        </div>
                        <div className={styles['reviews-card-1-source']}>
                            from Facebook
                        </div>
                        <div className={styles['reviews-card-1-owner']}>
                            Alex
                        </div>
                        <div className={styles['reviews-card-1-founder']}>
                            Co-Founder at Agency
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['slider']}>
                <div className={styles['slider-1']}></div>
                <div className={styles['slider-2']}></div>
                <div className={styles['slider-3']}></div>
            </div>
        </div>
    )
}

export { Reviews }
