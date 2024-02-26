import Link from 'next/link'
import { Carousel, Flex, Image } from 'antd'

import styles from './Whyus.module.css'
import { FeaturesItemType } from './constants'
import { useState } from 'react'

type Props = {
    featuresListItems?: FeaturesItemType[]
    title?: string
}

export default function Whyus(props: Props) {
    const { featuresListItems, title } = props

    const [activeWhyUsItem, setActiveWhyUsItem] = useState(0)

    return (
        <div className='box-xl-spacing'>
            <div className='carrctl-block-title'>{title || 'WHY US?'}</div>

            <Carousel
                dots={true}
                slidesToShow={3}
                swipe={true}
                responsive={[
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 660,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ]}
                swipeToSlide={true}
                verticalSwiping={true}
                className={`def-mt-22 ${styles['features-item-list']}`}
            >
                {featuresListItems?.map((item, index: number) => (
                    <div className='def-px-10' key={index}>
                        <div
                            className={` ${
                                activeWhyUsItem == index
                                    ? styles['feature-item-box-active']
                                    : 'feature-item-box-wrap'
                            } gutter-row h-full`}
                            onMouseEnter={() => setActiveWhyUsItem(null)}
                            onMouseLeave={() => setActiveWhyUsItem(0)}
                        >
                            <div
                                className={`${styles['feature-item-box']} features-item text-center`}
                            >
                                <Image
                                    src={`/images/${item.imgUrl}.svg`}
                                    alt={`features-${index}`}
                                    preview={false}
                                    width={50}
                                    height={60}
                                />
                                <h2 className='features-item-title carrctl-subtitle def-mt-8'>
                                    {item.title}
                                </h2>
                                <p
                                    className={`${styles['features-item-desc']} text-gray def-mt-12 carrctl-small-description`}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            <Flex justify={'center'} className='def-mt-40'>
                <Link
                    href={process.env.NEXT_PUBLIC_BOOK_URL}
                    className='carrctl-btn carrctl-btn-secondary'
                >
                    Book now
                </Link>
            </Flex>
        </div>
    )
}
export { Whyus }
