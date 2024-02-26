'use client'

import Link from 'next/link'
import styles from './Blog.module.css'
import { Image, Flex, Carousel } from 'antd'

export default function Blog() {
    const BlogItemsList = [
        {
            imgUrl: `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/blog-1.webp`,
            title: 'Lorem ipsum dolor sit amet consectetur',
            author: 'Headquartes',
            date: 'October 10, 2023',
        },
        {
            imgUrl: `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/blogs-mercedes.webp`,
            title: 'Lorem ipsum dolor sit amet consectetur',
            author: 'Headquartes',
            date: 'October 10, 2023',
        },
        {
            imgUrl: `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/main/blogs-porsche.webp`,
            title: 'Lorem ipsum dolor sit amet consectetur',
            author: 'Headquartes',
            date: 'October 10, 2023',
        },
    ]

    return (
        <div className={`box-sm-spacing md-mt-20`}>
            <div className={`${styles['blog-bg']} blog-section `}>
                <div className='carrctl-block-title def-mb-36 md-mb-10 text-black'>
                    Blog
                </div>
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
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                    ]}
                    swipeToSlide={true}
                    verticalSwiping={true}
                >
                    {BlogItemsList?.map((item, index: number) => (
                        <div className='def-px-10 md-px-2' key={index}>
                            <div
                                className={`${styles['blog-item-box']} blogs-item text-left`}
                            >
                                <Image
                                    src={item.imgUrl}
                                    alt={`blogs-${index}`}
                                    preview={false}
                                    height={250}
                                    width={'100%'}
                                />
                                <h2 className='blogs-item-title carrctl-subtitle def-mt-20 blog-card-divider text-black'>
                                    {item.title}
                                </h2>
                                <Flex
                                    align='center'
                                    justify='space-between'
                                    wrap={'wrap'}
                                    className='def-mb-10 def-mt-8'
                                >
                                    <p className='blogs-item-desc carrctl-small-description text-gray def-my-2'>
                                        {item.author}
                                    </p>
                                    <p className='blogs-item-desc carrctl-small-description text-gray def-my-2'>
                                        {item.date}
                                    </p>
                                </Flex>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <Flex align='center' justify='center' className='def-mt-30'>
                    <Link
                        href={process.env.NEXT_PUBLIC_BOOK_URL}
                        className='carrctl-btn carrctl-btn-secondary'
                    >
                        Book now
                    </Link>
                </Flex>
            </div>
        </div>
    )
}

export { Blog }
