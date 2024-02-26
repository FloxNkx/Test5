import React from 'react'
import { Carousel, Image } from 'antd'
import { BeginingInfomrationBenefitType } from './constants'

import styles from './BeginingInformation.module.css'

type Props = {
    benefitsList: BeginingInfomrationBenefitType[]
}

export default function BeginingInformation(props: Props) {
    const { benefitsList } = props

    return (
        <div className='beginning-information-section box-sm-spacing def-mt-50 md-mt-10'>
            <div className='carrctl-block-title uppercase def-mb-24 def-mr-60 md-mr-0'>
                Why we started?
            </div>
            <div className='carrctl-small-description text-white def-mb-40 md-mb-10'>
                Carrectly Auto Care was born out of a common frustration – the
                struggle to find a reliable mechanic and hassle-free car service
                in Chicago. We decided to be the solution, a team dedicated to
                solving these universal challenges for others. Our ethos
                revolves around innovation, simplicity, and unmatched
                convenience, aiming to revolutionize the auto service industry.{' '}
                <br /> <br />
                In a world where technology is abundant but time is scarce,
                expectations for quality and simplicity are at an all-time high.
                Unfortunately, the auto maintenance experience often falls
                short. At Carrectly, we're committed to changing that. From
                highly-trained mechanics to top-tier auto detailers, we
                guarantee the highest quality service across the board – from
                hand car washes and detailing to mechanical repairs, auto body
                work, ceramic coating, paint protection film, tints, and more.
                <br /> <br />
                Carrectly employs research, technology, and logistics to address
                the lack of transparency and convenience in the auto maintenance
                business. Our commitment is to provide a seamless experience for
                customers who value their time – from pickup to fantastic
                service to fair pricing, and finally, a hassle-free drop-off.
            </div>
            <div className='relative'>
                <div
                    className={styles['begining-information-benefits-image']}
                />
                <div className={styles['begining-information-benefits-list']}>
                    <Carousel
                        dots={true}
                        slidesToShow={3}
                        responsive={[
                            {
                                breakpoint: 960,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 560,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ]}
                        swipe={true}
                        swipeToSlide={true}
                        verticalSwiping={true}
                        autoplay={true}
                        className='center-carousel-item full-image-carousel def-mb-10'
                    >
                        {benefitsList?.map(
                            (
                                item: BeginingInfomrationBenefitType,
                                index: number,
                            ) => (
                                <div
                                    key={index}
                                    className={`
                                def-mx-30
                                ${styles['begining-information-benefit-item']}`}
                                >
                                    <div className='flex flex-col items-center justify-center'>
                                        <Image
                                            src={`/images/${item.icon}.svg`}
                                            alt={`car-${index}`}
                                            preview={false}
                                            key={index}
                                            className='w-full h-full image-cover mx-auto def-mb-16'
                                        />
                                        <h4 className='carrctl-subtitle uppercase text-secondary-gray def-mb-16 text-center'>
                                            {item.title}
                                        </h4>
                                        <p className='carrctl-small-description text-secondary-gray text-center'>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ),
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export { BeginingInformation }
