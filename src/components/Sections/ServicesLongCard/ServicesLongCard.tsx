import { Button, Carousel, Col, Flex, Image, Row } from 'antd'
import styles from './ServicesLongCard.module.css'
import { ServiceLongType } from './constants'

type Props = {
    services?: ServiceLongType[]
}

export default function ServicesLongCard(props: Props) {
    const { services } = props

    const renderServices = () => {
        return services?.map((item, index: number) => (
            <Row
                className={`${styles['service-item-box']} ${
                    index % 2 == 0 ? 'row' : 'row-reverse'
                } def-my-20 md-my-0 services-item text-left`}
                gutter={48}
                key={index}
            >
                <Col md={8} xs={24}>
                    <Image
                        src={`${item.imgUrl}`}
                        alt={`services-${index}`}
                        preview={false}
                        className='carrctl-br-20'
                    />
                </Col>
                <Col md={16} xs={24}>
                    <h2
                        className={`${styles['services-item-title']} carrctl-simply-title text-white def-mt-8 uppercase`}
                    >
                        {item.title}
                    </h2>
                    <p
                        className={`${styles['services-item-desc']} def-mt-20 carrctl-description`}
                    >
                        {item.desc}
                    </p>
                    <Button
                        type='text'
                        className={`${styles['services-item-btn']} carrctl-btn carrctl-purple-btn def-mt-20`}
                    >
                        Get quote
                    </Button>
                </Col>
            </Row>
        ))
    }
    return (
        <div className='box-xl-xxs-spacing'>
            <div className='show md-hide desctop-services'>
                <div className={`${styles['services-list']}`}>
                    {renderServices()}
                </div>
            </div>
            <div className='md-show-carousel hide-carousel mobile-services'>
                <Carousel
                    dots={true}
                    slidesToShow={3}
                    swipe={true}
                    responsive={[
                        {
                            breakpoint: 960,
                            settings: {
                                slidesToShow: 1,
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
                    className={`${styles['services-list']}`}
                >
                    {renderServices()}
                </Carousel>
            </div>
        </div>
    )
}
export { ServicesLongCard }
