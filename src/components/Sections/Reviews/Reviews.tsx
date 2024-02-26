'use client'

import { Carousel, Flex, Image } from 'antd'
import styles from './Reviews.module.css'
import { ReviewsType } from './contants'

type Props = {
    reviewsList: ReviewsType[]
}

export default function Reviews(props: Props) {
    const { reviewsList } = props

    return (
        <div className='box-xl-spacing reviews-section'>
            <div className='carrctl-block-title def-mb-36 md-mb-10'>
                REVIEWS
            </div>

            <Carousel
                dots={true}
                slidesToShow={3}
                swipe={true}
                responsive={[
                    {
                        breakpoint: 1060,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ]}
                swipeToSlide={true}
                verticalSwiping={true}
                className={`${styles['reviews-list']}`}
            >
                {reviewsList.map((item: ReviewsType, index: number) => (
                    <div className='def-px-10 md-px-2' key={index}>
                        <div className={styles['review-box']}>
                            <Flex
                                align='middle'
                                gap='middle'
                                justify='start'
                                className='review-card-divider'
                            >
                                <h4 className='carrctl-simply-title text-white'>
                                    {item.rating}
                                </h4>
                                <Flex
                                    align='center'
                                    gap='small'
                                    justify='start'
                                >
                                    {[...Array(5)].map((_, idX: number) => (
                                        <Image
                                            src='/images/rating-star.svg'
                                            alt={`star-${idX}`}
                                            preview={false}
                                            width={25}
                                            height={25}
                                            key={idX}
                                        />
                                    ))}
                                </Flex>
                            </Flex>
                            <Flex
                                vertical={true}
                                justify='space-between'
                                className={`${styles['reviews-info-section']}`}
                            >
                                <div className='first-reviews-section'>
                                    <p className='carrctl-small-description def-mt-30'>
                                        {item.desc}
                                    </p>
                                </div>
                                <div className='second-reviews-section'>
                                    <p className='def-mt-34 text-gray carrctl-card-description'>
                                        from {item.from}
                                    </p>
                                    <h4 className='def-my-8 carrctl-subtitle text-white'>
                                        {item.author}
                                    </h4>
                                    <p className='def-my-4 carrctl-description card-title-color'>
                                        {item.position}
                                    </p>
                                </div>
                            </Flex>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export { Reviews }
