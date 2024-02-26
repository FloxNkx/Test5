import React from 'react'
import { Carousel, Image } from 'antd'

type Props = {
    imagesList: string[]
    showItems?: number
    isDynamicHeight?: boolean
}

export default function Brands(props: Props) {
    const { imagesList, showItems, isDynamicHeight } = props

    return (
        <div className='brands-section box-sm-spacing'>
            <Carousel
                dots={true}
                slidesToShow={showItems || 3}
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
                className='center-carousel-item def-mb-10'
            >
                {imagesList?.map((item: string, index: number) => (
                    <Image
                        src={item}
                        alt={`brand-${index}`}
                        preview={false}
                        height={isDynamicHeight ? 'auto' : 120}
                        key={index}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export { Brands }
