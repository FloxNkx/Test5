'use client'

import Image from 'next/image'
import global from './Services-styles-global.module.css'
import styles from './ServicesBlock.module.css'

/* Service Block */
const ServicesBlock = () => {
    return (
        <div className={styles.servicesList}>
            <div className={styles.servicesRow1}>
                <div className={`${styles.serviceItem} ${styles.serviceItem1}`}>
                    <div>
                        <h3 className='carrctl-simply-title uppercase'>
                            Mechanical
                        </h3>
                        <p className='carrctl-description def-mt-16 line-heigh-xl'>
                            Trust the experts at Carrectly Auto Care for
                            comprehensive mechanical services that keep your
                            vehicle running smoothly. Our skilled technicians
                            perform routine maintenance, diagnostics, and
                            repairs with precision. Benefit from our transparent
                            approach, where we provide upfront pricing and keep
                            you informed throughout the process.
                        </p>
                        <a
                            href={process.env.NEXT_PUBLIC_MORE_URL}
                            className='def-mt-20 carrctl-primary-link'
                        >
                            Learn More.
                        </a>
                        <div className={styles.buttonGroup}>
                            <button
                                className={`${global.btn} ${global.btn__primary}`}
                            >
                                Book now
                            </button>
                            <button
                                className={`${global.btn} ${global.btn__primary}`}
                            >
                                Get quote
                            </button>
                        </div>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/Car.webp`}
                            width={400}
                            height={300}
                            alt='Mechanical'
                        />
                    </div>
                </div>
                <div className={`${styles.serviceItem} ${styles.serviceItem2}`}>
                    <div>
                        <h3 className='carrctl-simply-title uppercase'>
                            Protection
                        </h3>
                        <p className='carrctl-description def-mt-16 line-heigh-xl'>
                            Ensure your vehicle's long-term health and
                            appearance with our specialized protection services
                            at Carrectly Auto Care. We offer a range of
                            protective treatments, including PPF, ceramic
                            coating and tints. These services shield your
                            vehicle from environmental damage, preserving its
                            value and longevity.
                        </p>
                        <a
                            href={process.env.NEXT_PUBLIC_MORE_URL}
                            className='def-mt-20 carrctl-primary-link'
                        >
                            Learn More.
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.servicesRow2}>
                <div className={`${styles.serviceItem} ${styles.serviceItem3}`}>
                    <div>
                        <h3 className='carrctl-simply-title uppercase'>
                            Aesthetics
                        </h3>
                        <p className='carrctl-description def-mt-16 line-heigh-xl'>
                            Elevate your vehicle's appearance with our
                            meticulous aesthetics services at Chicago’s Top
                            Experts in upholstery and more. Our skilled
                            professionals are dedicated to enhancing the visual
                            appeal of your car’s interior and exterior. Enjoy a
                            range of services, from leather repair, flooded
                            carpet repair, and vinyl wraps to wheel
                            restoration/repaint.
                        </p>
                        <a
                            href={process.env.NEXT_PUBLIC_MORE_URL}
                            className='def-mt-20 carrctl-primary-link'
                        >
                            Learn More.
                        </a>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/aesthetics-image.png`}
                            width={270}
                            height={140}
                            alt='Aesthetics'
                        />
                    </div>
                </div>
                <div className={`${styles.serviceItem} ${styles.serviceItem4}`}>
                    <div>
                        <h3 className='carrctl-simply-title uppercase'>
                            Detailing
                        </h3>
                        <p className='carrctl-description def-mt-16 line-heigh-xl'>
                            Experience a new level of cleanliness and shine with
                            our top-notch detailing services at Carrectly Auto
                            Care. From exterior waxing to interior deep
                            cleaning, our detailing experts bring out the best
                            in your vehicle, restoring its showroom glow.
                        </p>
                        <a
                            href={process.env.NEXT_PUBLIC_MORE_URL}
                            className='def-mt-20 carrctl-primary-link'
                        >
                            Learn More.
                        </a>
                        <button className='carrctl-purple-btn'>Book now</button>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/detailing-image.webp`}
                            width={320}
                            height={260}
                            alt='Detailing'
                        />
                    </div>
                </div>
                <div className={`${styles.serviceItem} ${styles.serviceItem5}`}>
                    <div>
                        <h3 className='carrctl-simply-title uppercase'>
                            Body Work
                        </h3>
                        <p className='carrctl-description def-mt-16 line-heigh-xl'>
                            Count on Chicago’s Top Experts for exceptional
                            bodywork services that restore your vehicle to its
                            original condition Our skilled technicians handle
                            everything from minor dents and scratches to major
                            collision damage, using advanced techniques and
                            quality materials for precision repairs.
                        </p>
                        <a
                            href={process.env.NEXT_PUBLIC_MORE_URL}
                            className='def-mt-20 carrctl-primary-link'
                        >
                            Learn More.
                        </a>
                        <button className='carrctl-purple-btn'>Book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesBlock
