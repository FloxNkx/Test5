import Link from 'next/link'
import { Carousel, Flex } from 'antd'

import styles from './Prices.module.css'

import { PricesItem } from './constants'

type Props = {
    pricesList: PricesItem[]
}

export default function Prices(props: Props) {
    const { pricesList } = props

    return (
        <div
            className={`${styles['carrctl-service-selection']} box-xs-spacing`}
        >
            <div
                className={`${styles['carrctl-prices-selection-box']} def-mt-30`}
            >
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
                    className={`def-mt-40 def-carousel-md-navigation`}
                >
                    {pricesList?.map((item: PricesItem, index: number) => (
                        <div className='def-px-10' key={index}>
                            <div className={`${styles['carrctl-prices-box']}`}>
                                <h2 className='carrctl-subtitle text-gray def-mb-4'>
                                    {item.subtitle}
                                </h2>
                                <p className='carrctl-subtitle def-mb-6'>
                                    {item.startDate}
                                </p>
                                <p className='text-xl-s md-text-xl carrctl-title text-white def-mb-16 md-mb-4 md-mt-6'>
                                    $ {item.price}
                                </p>
                                <ul className='carrctl-def-list carrctl-benefits-list md-mt-14'>
                                    {item.benefits?.map(
                                        (benefit, idX: number) => (
                                            <li
                                                key={idX}
                                                className='carrctl-def-list-item carrctl-benefit-item def-my-6 text-white'
                                            >
                                                {benefit}
                                            </li>
                                        ),
                                    )}
                                </ul>
                                <div className='def-mt-12'>
                                    <a
                                        href={item.link?.url}
                                        className='carrctl-primary-link def-mx-auto'
                                    >
                                        {item.link?.label}
                                    </a>
                                </div>
                                <Flex justify={'center'} className='def-mt-16'>
                                    <Link
                                        href={process.env.NEXT_PUBLIC_BOOK_URL}
                                        className='carrctl-btn carrctl-btn-secondary'
                                    >
                                        Book now
                                    </Link>
                                </Flex>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
export { Prices }
