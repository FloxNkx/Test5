import styles from './more.module.css'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function More() {
    return (
        <div className={styles['body']}>
            <div className={styles['body-title']}>
                Hundred of Happy Customers
            </div>
            <div className={styles['body-pic']}>
                <Carousel autoPlay={true}></Carousel>
                <div className={styles['car-carousel']}>
                    {[
                        <img
                            key='1'
                            src='https://carrectly.s3.amazonaws.com/public/about/About-carousel-1.webp'
                        />,
                        <img
                            key='2'
                            src='https://carrectly.s3.amazonaws.com/public/about/About-carousel-2.webp'
                        />,
                        <img
                            key='3'
                            src='https://carrectly.s3.amazonaws.com/public/about/About-carousel-3.webp'
                        />,
                    ]}
                </div>
            </div>
        </div>
    )
}

export { More }
