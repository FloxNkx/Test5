import Link from 'next/link'
import { Carousel, Col, Flex, Image, Row } from 'antd'
import { CarsCardType } from './constants'

import styles from './CarsCard.module.css'

type Props = {
    carsCardListItems?: CarsCardType[]
    isSecondCardStyles?: boolean
}

export default function CarsCard(props: Props) {
    const { carsCardListItems, isSecondCardStyles } = props

    const renderCarsCard = () => {
        return carsCardListItems?.map((item, index: number) => (
            <Col
                md={item.colWidth}
                xs={24}
                key={index}
                className={`${styles[`cars-card-item-${index}`]} ${isSecondCardStyles ? styles['cars-card-second-style'] : styles['cars-card-first-style']} def-px-10 def-my-14 align-stretch`}
            >
                <div
                    className={`${styles['cars-card-item-box']} h-full`}
                    style={{
                        backgroundImage: `url(/images/${item.image}.png)`,
                    }}
                >
                    <div className={`${styles['cars-card-item-content']}`}>
                        <h2
                            className={`${styles['cars-card-item-title']} carrctl-card-description uppercase text-lg text-left def-mt-4`}
                        >
                            {item.title}
                        </h2>
                        <p
                            className={`${styles['cars-card-item-desc']} def-mt-12 carrctl-description`}
                        >
                            {item.desc}
                        </p>
                        <div className='def-mt-12'>
                            <a
                                href={item.link?.url}
                                className={`${styles['carrctl-link']} carrctl-primary-link`}
                            >
                                {item.link?.label}
                            </a>
                        </div>
                        <Flex
                            justify={'flex-start'}
                            className='def-mt-20 def-mb-70 md-mb-30'
                        >
                            <Link
                                href={process.env.NEXT_PUBLIC_BOOK_URL}
                                className='carrctl-btn carrctl-btn-secondary'
                            >
                                Book now
                            </Link>
                        </Flex>
                    </div>
                </div>
            </Col>
        ))
    }

    return (
        <div className='box-xl-spacing'>
            <div className='show md-hide desctop-services'>
                <div className={`${styles['cars-card-list']}`}>
                    <Row
                        justify={'space-between'}
                        className={`def-my-20 def-mx-10-row md-my-0 text-left`}
                    >
                        {renderCarsCard()}
                    </Row>
                </div>
            </div>
            <div className='md-show-carousel hide-carousel mobile-services'>
                <Carousel
                    dots={true}
                    slidesToShow={1}
                    swipe={true}
                    responsive={[
                        {
                            breakpoint: 790,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                    ]}
                    swipeToSlide={true}
                    verticalSwiping={true}
                    className={`${styles['cars-card-list']} def-mt-40`}
                >
                    {renderCarsCard()}
                </Carousel>
            </div>
        </div>
    )
}
export { CarsCard }
