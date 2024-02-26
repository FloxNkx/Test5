'use client'

import Link from 'next/link'
import { Flex, Image } from 'antd'

import styles from './Banner.module.css'

type Props = {
    title?: string
    desc?: string
    isBoldTitle?: boolean
    isEnabledRating?: boolean
    isNoSpace?: boolean
    isSpaceAfterImages?: boolean
    isDisalbedFirstBtn?: boolean
    secondaryBtn?: {
        label?: string
        link?: string
        isEnabled?: boolean
    }
}

export default function Banner(props: Props) {
    const {
        isNoSpace,
        isSpaceAfterImages,
        isDisalbedFirstBtn,
        isEnabledRating = true,
        title,
        desc,
        isBoldTitle,
        secondaryBtn = {
            label: 'About us',
            link: process.env.NEXT_PUBLIC_ABOUT_US_URL,
            isEnabled: true,
        },
    } = props

    return (
        <div
            className={`${isNoSpace ? 'box-xl-s-spacing' : 'box-xl-x-spacing'} page-banner container-xl container`}
        >
            <div className='page-banner-title'>
                <div
                    className={`${isBoldTitle ? 'text-xl-s' : ''} carrctl-title uppercase`}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <div
                    className='carrctl-description def-mt-20 w-1-2 mx-left'
                    dangerouslySetInnerHTML={{ __html: desc }}
                />
                <Flex
                    align='middle'
                    wrap='wrap'
                    className='def-mt-20'
                    gap='large'
                >
                    {!isDisalbedFirstBtn && (
                        <Link
                            href={process.env.NEXT_PUBLIC_BOOK_URL}
                            className='carrctl-btn carrctl-btn-secondary'
                        >
                            Book now
                        </Link>
                    )}
                    {secondaryBtn.isEnabled && (
                        <Link href={secondaryBtn.link} className='carrctl-btn'>
                            {secondaryBtn.label}
                        </Link>
                    )}
                </Flex>
                <div className='def-mt-30 md-mt-16'>
                    {isEnabledRating && (
                        <div className='rating-block'>
                            <Flex
                                align='middle'
                                justify='flex-start'
                                gap='small'
                                wrap='wrap'
                            >
                                {[...Array(5)].map((_, index: number) => (
                                    <Image
                                        src='/images/rating-star.svg'
                                        alt='5 Stars reviews'
                                        preview={false}
                                        className='def-mx-1'
                                        key={index}
                                    />
                                ))}
                                <p className={styles['rating-description']}>
                                    5 stars based on 120 640 reviews
                                </p>
                            </Flex>
                        </div>
                    )}
                    <div
                        className={`${isSpaceAfterImages ? 'def-mt-80 md-mt-6' : 'def-mt-0'} brands-blocks`}
                    >
                        <Flex
                            align='middle'
                            className='def-mt-30 md-mt-16 mob-img-4'
                            gap='large'
                        >
                            <Image
                                src={'/images/badge-1.png'}
                                preview={false}
                                loading='lazy'
                                width={89}
                                height={80}
                                alt='Brands1'
                            />
                            <Image
                                src='/images/badge-2.png'
                                preview={false}
                                loading='lazy'
                                width={89}
                                height={80}
                                alt='Brands2'
                            />
                            <Image
                                src='/images/badge-3.png'
                                preview={false}
                                loading='lazy'
                                width={80}
                                height={80}
                                alt='Brands3'
                            />
                        </Flex>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Banner }
