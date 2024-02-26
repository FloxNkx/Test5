'use client'

import styles from './Services-dashboard.module.css'
import global from './Services-styles-global.module.css'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import ServicesBlock from './ServicesBlock'
import VerticalTabs from './VerticalTabs/ServicesMobileVerticalTabs'

export default function ServiceDashboard() {
    const isTabletOrMobile = useMediaQuery(960)
    return (
        <div className='box-sm-spacing'>
            <div className='carrctl-block-title'>Services</div>
            {
                /* Displaying components by mediaQuery */
                !isTabletOrMobile ? (
                    <ServicesBlock />
                ) : (
                    <VerticalTabs
                        data={[
                            {
                                name: 'Mechanical',
                                content: (
                                    <>
                                        <h3 className='carrctl-simply-title uppercase'>
                                            Mechanical
                                        </h3>
                                        <p className='carrctl-description def-mt-16 line-heigh-xl text-black'>
                                            Trust the experts at Carrectly Auto
                                            Care for comprehensive mechanical
                                            services that keep your vehicle
                                            running smoothly. Our skilled
                                            technicians perform routine
                                            maintenance, diagnostics, and
                                            repairs with precision. Benefit from
                                            our transparent approach, where we
                                            provide upfront pricing and keep you
                                            informed throughout the process.
                                        </p>
                                        <a
                                            href={
                                                process.env.NEXT_PUBLIC_MORE_URL
                                            }
                                            rel='bookmark'
                                        >
                                            Learn More.
                                        </a>
                                        <div
                                            className={`${styles.buttonGroup}`}
                                        >
                                            <button
                                                className={`${global.btn} ${global.btn__primary}`}
                                            >
                                                Get quote
                                            </button>
                                            <button
                                                className={`${global.btn} ${global.btn__secondary}`}
                                            >
                                                Book now
                                            </button>
                                        </div>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/mechanical-mobile-image.webp`}
                                            width={450}
                                            height={250}
                                            alt='Detailing'
                                        />
                                    </>
                                ),
                                styles: `${styles.tabBody} ${styles.tabContent1}`,
                            },
                            {
                                name: 'Protection',
                                content: (
                                    <>
                                        <h3 className='carrctl-simply-title uppercase'>
                                            Protection
                                        </h3>
                                        <p className='carrctl-description def-mt-16 line-heigh-xl text-black'>
                                            Ensure your vehicle's long-term
                                            health and appearance with our
                                            specialized protection services at
                                            Carrectly Auto Care. We offer a
                                            range of protective treatments,
                                            including PPF, ceramic coating and
                                            tints. These services shield your
                                            vehicle from environmental damage,
                                            preserving its value and longevity.
                                        </p>
                                        <a
                                            href={
                                                process.env.NEXT_PUBLIC_MORE_URL
                                            }
                                            rel='bookmark'
                                        >
                                            Learn More.
                                        </a>
                                        <div
                                            className={`${styles.buttonGroup}`}
                                        >
                                            <button
                                                className={`${global.btn} ${global.btn__primary}`}
                                            >
                                                Get quote
                                            </button>
                                            <button
                                                className={`${global.btn} ${global.btn__secondary}`}
                                            >
                                                Book now
                                            </button>
                                        </div>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/mechanical-mobile-image.webp`}
                                            width={450}
                                            height={250}
                                            alt='Detailing'
                                        />
                                    </>
                                ),
                                styles: `${styles.tabBody} ${styles.tabContent2}`,
                            },
                            {
                                name: 'Aesthetics',
                                content: (
                                    <>
                                        <h3 className='carrctl-simply-title uppercase'>
                                            Aesthetics
                                        </h3>
                                        <p className='carrctl-description def-mt-16 line-heigh-xl text-black'>
                                            "Elevate your vehicle's appearance
                                            with our meticulous aesthetics
                                            services at Chicago’s Top Experts in
                                            upholstery and more. Our skilled
                                            professionals are dedicated to
                                            enhancing the visual appeal of your
                                            car’s interior and exterior. Enjoy a
                                            range of services, from leather
                                            repair, flooded carpet repair, and
                                            vinyl wraps to wheel
                                            restoration/repaint.
                                        </p>
                                        <a
                                            href={
                                                process.env.NEXT_PUBLIC_MORE_URL
                                            }
                                            rel='bookmark'
                                        >
                                            Learn More.
                                        </a>
                                        <div
                                            className={`${styles.buttonGroup}`}
                                        >
                                            <button
                                                className={`${global.btn} ${global.btn__primary}`}
                                            >
                                                Get quote
                                            </button>
                                            <button
                                                className={`${global.btn} ${global.btn__secondary}`}
                                            >
                                                Book now
                                            </button>
                                        </div>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/mechanical-mobile-image.webp`}
                                            width={450}
                                            height={250}
                                            alt='Detailing'
                                        />
                                    </>
                                ),
                                styles: `${styles.tabBody} ${styles.tabContent3}`,
                            },
                            {
                                name: 'Detailing',
                                content: (
                                    <>
                                        <h3 className='carrctl-simply-title uppercase'>
                                            Detailing
                                        </h3>
                                        <p className='carrctl-description def-mt-16 line-heigh-xl text-black'>
                                            Experience a new level of
                                            cleanliness and shine with our
                                            top-notch detailing services at
                                            Carrectly Auto Care. From exterior
                                            waxing to interior deep cleaning,
                                            our detailing experts bring out the
                                            best in your vehicle, restoring its
                                            showroom glow.
                                        </p>
                                        <a
                                            href={
                                                process.env.NEXT_PUBLIC_MORE_URL
                                            }
                                            rel='bookmark'
                                        >
                                            Learn More.
                                        </a>
                                        <div
                                            className={`${styles.buttonGroup}`}
                                        >
                                            <button
                                                className={`${global.btn} ${global.btn__primary}`}
                                            >
                                                Get quote
                                            </button>
                                            <button
                                                className={`${global.btn} ${global.btn__secondary}`}
                                            >
                                                Book now
                                            </button>
                                        </div>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/mechanical-mobile-image.webp`}
                                            width={450}
                                            height={250}
                                            alt='Detailing'
                                        />
                                    </>
                                ),
                                styles: `${styles.tabBody} ${styles.tabContent4}`,
                            },
                            {
                                name: 'Body Work',
                                content: (
                                    <>
                                        <h3 className='carrctl-simply-title uppercase'>
                                            Body Work
                                        </h3>
                                        <p className='carrctl-description def-mt-16 line-heigh-xl text-black'>
                                            Count on Chicago’s Top Experts for
                                            exceptional bodywork services that
                                            restore your vehicle to its original
                                            condition Our skilled technicians
                                            handle everything from minor dents
                                            and scratches to major collision
                                            damage, using advanced techniques
                                            and quality materials for precision
                                            repairs.
                                        </p>
                                        <a
                                            href={
                                                process.env.NEXT_PUBLIC_MORE_URL
                                            }
                                            rel='bookmark'
                                        >
                                            Learn More.
                                        </a>
                                        <div
                                            className={`${styles.buttonGroup}`}
                                        >
                                            <button
                                                className={`${global.btn} ${global.btn__primary}`}
                                            >
                                                Get quote
                                            </button>
                                            <button
                                                className={`${global.btn} ${global.btn__secondary}`}
                                            >
                                                Book now
                                            </button>
                                        </div>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/mechanical-mobile-image.webp`}
                                            width={450}
                                            height={250}
                                            alt='Detailing'
                                        />
                                    </>
                                ),
                                styles: `${styles.tabBody} ${styles.tabContent5}`,
                            },
                        ]}
                    />
                )
            }
        </div>
    )
}

export { ServiceDashboard }
