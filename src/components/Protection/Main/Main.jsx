'use client'

import Link from 'next/link'
import styles from './Main.module.css'

const Button = ({ className, label }) => (
    <button className={className}>{label}</button>
)

const Image = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={className} />
)

export default function TheMain() {
    return (
        <div className={styles['body']}>
            <div className={styles['block-description']}>
                <div className={styles['block-description-title']}>
                    PROTECTION
                </div>

                <div className={styles['block-description-description']}>
                    Lorem ipsum dolor sit amet consectetur. Neque urna cursus
                    blandit faucibus nisi pharetra praesent. Fringilla diam
                    vestibulum neque .
                </div>

                <div className={styles['button-block']}>
                    <Button
                                type='text'
                                className='carrctl-btn carrctl-btn-secondary'
                            >
                                <Link href={process.env.NEXT_PUBLIC_BOOK_URL}>Book now</Link>
                            </Button>
                    <div className={styles['button-block-about-us']}>
                        <Link href={process.env.NEXT_PUBLIC_ABOUT_US_URL}>About us</Link>
                    </div>
                </div>
                <div className={styles['body-ranking']}>
                    <div className={styles['body-ranking-stars']}>
                        <Image
                            src='https://carrectly.s3.amazonaws.com/public/main/Reviews_stars.webp'
                            alt='5 Stars reviews'
                            className={styles.hero_reviews}
                        />
                    </div>
                    <div className={styles['body-ranking-brands']}>
                        <Image
                            className={styles.hero_certificates_brands1}
                            src='https://carrectly.s3.amazonaws.com/public/main/Group.webp'
                            alt='Brands1'
                        />
                        <Image
                            className={styles.hero_certificates_brands2}
                            src='https://carrectly.s3.amazonaws.com/public/main/Group 2760.webp'
                            alt='Brands2'
                        />
                        <Image
                            className={styles.hero_certificates_brands3}
                            src='https://carrectly.s3.amazonaws.com/public/main/Group (1).webp'
                            alt='Brands3'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { TheMain }
