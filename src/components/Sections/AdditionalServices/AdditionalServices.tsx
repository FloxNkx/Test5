import Link from 'next/link'
import { Carousel, Flex, Image } from 'antd'
import { FeaturesItemType } from '../WhyUs/constants'

type Props = {
    additionalServiceListItems?: FeaturesItemType[]
    isEnabledGeneralBtn?: boolean
}

export default function AdditionalServices(props: Props) {
    const { additionalServiceListItems, isEnabledGeneralBtn } = props

    return (
        <div className='box-xl-spacing'>
            <div className='carrctl-block-title'>additional services</div>

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
                {additionalServiceListItems?.map(
                    (item: FeaturesItemType, index: number) => (
                        <div className='def-px-10' key={index}>
                            <div className={`gutter-row`}>
                                <div className={` text-center`}>
                                    <Image
                                        src={`/images/${item.imgUrl}.svg`}
                                        alt={`features-${index}`}
                                        preview={false}
                                        width={50}
                                        height={60}
                                    />
                                    <h2 className='carrctl-subtitle uppercase def-mt-4'>
                                        {item.title}
                                    </h2>
                                    <p
                                        className={`def-mt-12 def-mx-26 carrctl-small-description`}
                                    >
                                        {item.desc}
                                    </p>
                                    <Flex
                                        justify={'center'}
                                        className='def-mt-20'
                                    >
                                        <Link
                                            href={
                                                process.env.NEXT_PUBLIC_BOOK_URL
                                            }
                                            className='carrctl-btn carrctl-btn-secondary'
                                        >
                                            Book now
                                        </Link>
                                    </Flex>
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </Carousel>
            {isEnabledGeneralBtn && (
                <Flex justify={'center'} className='def-mt-50 md-hide'>
                    <Link
                        href={process.env.NEXT_PUBLIC_BOOK_URL}
                        className='carrctl-btn carrctl-purple-btn'
                    >
                        Free quote
                    </Link>
                </Flex>
            )}
        </div>
    )
}
export { AdditionalServices }
