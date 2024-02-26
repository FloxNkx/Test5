'use client';

import Link from 'next/link';
import styles from './Main.module.css';

const Button = ({ className, label }) => (
    <button className={className}>{label}</button>
);

const Image = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={className} />
);

export default function  TheMain () {
    return (
        <div className={styles['body']}>
            
                <div className={styles['block-description']}>
                    
                    <div  className={styles['block-description-title']}>
                    Tesla Services
                    </div>

                    <div className={styles['block-description-description']}>
                    Created by enthusiasts for enthusiasts. We provide automotive services for all cars to those looking for the best. Delivering peace of mind and great support                    </div>
                    <div className={styles['button-block']}>
                        <div className={styles['button-block-book-now']}>
                            <Link href="/book">
                                Book now
                            </Link>
                        </div>
                        
                        </div>
                        <div className={styles['body-ranking']}>
                           
                            <div className={styles['body-ranking-brands']}>
                                <Image  className={styles.hero_certificates_brands1 } src='https://carrectly.s3.amazonaws.com/public/main/Group.webp' alt='Brands1' />
                                <Image  className={styles.hero_certificates_brands2 } src='https://carrectly.s3.amazonaws.com/public/main/Group 2760.webp' alt='Brands2' />
                                <Image  className={styles.hero_certificates_brands3 } src='https://carrectly.s3.amazonaws.com/public/main/Group (1).webp' alt='Brands3' />
                            </div>
                        </div>

                </div>
                <div className={styles['body-image']}>
                <img src='https://carrectly.s3.amazonaws.com/public/tesla/tesla-main.webp' alt='oil-change' className={styles['body-image-oil-change']} />
            </div>
               
        </div>      
    )
}

export { TheMain };


