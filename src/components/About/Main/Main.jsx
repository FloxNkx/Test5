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
                    About US
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
            </div>
        </div>
    )
}

export { TheMain }
