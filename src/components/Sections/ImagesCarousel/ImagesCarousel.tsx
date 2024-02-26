import { Image, Carousel } from 'antd'

type Props = {
    images: string[]
}

export default function ImagesCarousel(props: Props) {
    const { images } = props

    return (
        <div className='images-carousel-section'>
            {images?.length > 0 && (
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
                    className={`def-carousel-md-navigation md-mb-30 md-mt-20`}
                >
                    {images.map((item, index: number) => (
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

export { ImagesCarousel }
