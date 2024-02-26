import React from 'react'
import { Carousel, Image } from 'antd'

type Props = {
    imagesList: string[]
}

export default function Brands(props: Props) {
    const { imagesList } = props

    return (
        <div className='customers-section box-sm-spacing'>
            <div className='carrctl-block-title def-mb-24 def-mr-60 md-mr-0'>
                Hundred of Happy Customers
            </div>
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
                {imagesList?.map((item: string, index: number) => (
                    <Image
                        src={item}
                        alt={`car-${index}`}
                        preview={false}
                        key={index}
                        className='w-full h-full image-cover'
                    />
                ))}
            </Carousel>
        </div>
    )
}

export { Brands }
