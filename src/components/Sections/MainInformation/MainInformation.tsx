import Link from 'next/link'
import { Row, Image, Col, Button, Flex, Carousel } from 'antd'
import { MainInformationType } from './contants'

type Props = {
    reverse?: boolean
    smallImage?: boolean
    informationItem: MainInformationType
}

export default function MainInformation(props: Props) {
    const { informationItem, reverse, smallImage } = props

    return (
        <div className='box-xl-xxs-spacing main-inforamtion-section'>
            {informationItem.mainTitle && (
                <div className='carrctl-block-title def-mb-28 def-mr-60 md-mr-0 md-w-full'>
                    {informationItem.mainTitle}
                </div>
            )}
            <Row
                gutter={24}
                align={'middle'}
                justify={'space-between'}
                className={`${reverse ? 'row-reverse' : 'row'}`}
            >
                <Col md={smallImage ? 8 : 12} xs={24}>
                    <Image
                        width={'100%'}
                        height={'100%'}
                        src={informationItem.mainImage}
                        preview={false}
                        alt={'desc-img'}
                    />
                </Col>
                <Col md={smallImage ? 16 : 12} xs={24}>
                    <Flex
                        justify='center'
                        align='start'
                        vertical={true}
                        className='h-full md-mt-16'
                    >
                        {informationItem.date && (
                            <div className='carrctl-subtitle def-mb-16 uppercase'>
                                {informationItem.date}
                            </div>
                        )}
                        <h2 className='carrctl-subtitle uppercase'>
                            {informationItem.articleTile}
                        </h2>
                        {informationItem.articleDescs?.map(
                            (item: string, key: number) => (
                                <p
                                    className='carrctl-small-description def-mt-20'
                                    key={key}
                                >
                                    {item}
                                </p>
                            ),
                        )}
                        {informationItem?.btn && (
                            <Button
                                type='text'
                                className='carrctl-btn carrctl-btn-secondary def-mt-28 md-mx-auto'
                            >
                                <Link href={informationItem.btn.link}>
                                    {informationItem.btn.label}
                                </Link>
                            </Button>
                        )}
                    </Flex>
                </Col>
            </Row>
            {informationItem?.images?.length > 0 && (
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
                    className={`def-mt-28 def-carousel-md-navigation`}
                >
                    {informationItem.images.map((item, index: number) => (
                        <div className='def-px-0' key={index}>
                            <Image
                                src={item}
                                alt={`star-${index}`}
                                preview={false}
                                width={'100%'}
                                height={'100%'}
                                key={index}
                            />
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    )
}

export { MainInformation }
