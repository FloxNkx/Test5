import Link from 'next/link'
import { Carousel, Col, Flex, Image, Row } from 'antd'

import styles from './CarDemonstration.module.css'

import { CarsListItem } from './constants'

type Props = {
    carsList: CarsListItem[]
}

export default function CarDemonstration(props: Props) {
    const { carsList } = props

    return (
        <div className={'box-xl-spacing'}>
            <div className={'def-mt-30'}>
                <Carousel
                    dots={true}
                    slidesToShow={1}
                    swipe={true}
                    swipeToSlide={true}
                    verticalSwiping={true}
                    className={`def-mt-40 def-carousel-md-navigation`}
                >
                    {carsList?.map((item: CarsListItem, index: number) => (
                        <div className='def-px-10' key={index}>
                            <Row gutter={16}>
                                <Col md={7} xs={24}>
                                    <div
                                        className={`${styles['carrctl-prices-box']}`}
                                    >
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
                                                        className='carrctl-def-list-item carrctl-benefit-item def-my-6  text-white'
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
                                        <Flex
                                            justify={'center'}
                                            className='def-mt-16'
                                        >
                                            <Link
                                                href={
                                                    process.env
                                                        .NEXT_PUBLIC_BOOK_URL
                                                }
                                                className='carrctl-btn carrctl-btn-secondary'
                                            >
                                                Book now
                                            </Link>
                                        </Flex>
                                    </div>
                                </Col>
                                <Col md={17} xs={24}>
                                    <Image
                                        src={`/images/${item.image}`}
                                        preview={false}
                                        loading='lazy'
                                        alt='Brands1'
                                    />
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
export { CarDemonstration }
