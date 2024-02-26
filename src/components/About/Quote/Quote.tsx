'use client'
import { Flex, Image } from 'antd'

import styles from './Quote.module.css'

export default function Quote() {
    return (
        <div
            className={`quote-section-banner box-sm-spacing def-my-20 container-md container`}
        >
            <div className={`${styles['quote-section-text']} relative`}>
                <p className='carrctl-simply-title carrctl-italic text-white text-sm'>
                    Lorem ipsum dolor sit amet consectetur. Neque urna cursus
                    blandit faucibus nisi pharetra praesent. Fringilla diam
                    vestibulum neque at tristique in at faucibus. Diam lacus
                    egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc
                    ullamcorper et faucibus sit eu lacus cursus.
                </p>
                <p
                    className={`${styles['quote-section-author']} uppercase carrctl-subtitle def-mt-10 text-right`}
                >
                    Author
                </p>
            </div>
            <Flex
                align='middle'
                justify='center'
                className='def-mt-30 md-mt-16 mob-img-4'
                gap='large'
            >
                <Image
                    src={'/images/badge-1.png'}
                    preview={false}
                    loading='lazy'
                    width={141}
                    height={126}
                    alt='Brands1'
                />
                <Image
                    src='/images/badge-2.png'
                    preview={false}
                    loading='lazy'
                    width={141}
                    height={120}
                    alt='Brands2'
                />
                <Image
                    src='/images/badge-3.png'
                    preview={false}
                    loading='lazy'
                    width={140}
                    height={120}
                    alt='Brands3'
                />
            </Flex>
        </div>
    )
}

export { Quote }
