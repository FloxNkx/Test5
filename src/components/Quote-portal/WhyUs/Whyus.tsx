'use client'

import { Button } from 'antd'
import styles from './Whyus.module.css'
import Link from 'next/link'

export default function Whyus() {
    return (
        <div className='box'>
            <div className={styles['why-us']}>how does it work</div>

            <div className={styles['features-container']}>
                <div className={styles['feature-box']}>
                    <div className={styles['icon-container']}>
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/tesla/tesla-why-1.webp`}
                            alt='Trust & Safety Icon'
                        />
                    </div>

                    <h2>TRUST & SAFETY</h2>
                    <p>
                        All shops are trusted, highly rated, and loved by
                        Chicagoans. Our concierges go through rigorous training
                        and your car is insured while we service it.
                    </p>
                </div>

                <div className={styles['feature-box']}>
                    <div className={styles['icon-container']}>
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/tesla/tesla-why-2.webp`}
                            alt='Convenience Icon'
                        />
                    </div>
                    <h2>CONVENIENCE</h2>
                    <p>
                        Gone are the days of long lines and spending hours at
                        service centers. Don’t juggle your schedule around
                        maintenance appointments.
                    </p>
                </div>

                <div className={styles['feature-box']}>
                    <div className={styles['icon-container']}>
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/tesla/tesla-why-3.webp`}
                            alt='Stay Updated, Pay After Icon'
                        />
                    </div>
                    <h2>STAY UPDATED, PAY AFTER</h2>
                    We give you an expert advice and keep you updated on the
                    price and status. We ask for approval on all repairs needed
                    and you only pay when the service is completed.
                </div>
            </div>
            <div className={styles['box-background']}>
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/Vector-why-us.webp`}
                    alt='background'
                />
            </div>
            <div>
                <div>
                    <Button
                        type='text'
                        className='carrctl-btn carrctl-btn-secondary'
                    >
                        <Link href={process.env.NEXT_PUBLIC_BOOK_URL}>
                            Book now{' '}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export { Whyus }
