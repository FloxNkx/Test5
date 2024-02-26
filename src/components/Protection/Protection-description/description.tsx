import { Button } from 'antd'
import styles from './description.module.css'
import Link from 'next/link'

export default function Description() {
    return (
        <div className={styles['body']}>
            <div className={styles['body-title']}>WHY GET YOU PROTECTION?</div>
            <div className={styles['body-block']}>
                <div className={styles['body-block-car']}>
                    <img src='https://carrectly.s3.amazonaws.com/public/protection/Description.webp'></img>
                </div>
                <div className={styles['body-block-description']}>
                    <div className={styles['body-block-description-title']}>
                        WHY GET YOU PPF?
                    </div>
                    <div
                        className={styles['body-block-description-description']}
                    >
                        Lorem ipsum dolor sit amet consectetur. Neque urna
                        cursus blandit faucibus nisi pharetra praesent.
                        Fringilla diam vestibulum neque at tristique in at
                        faucibus. Diam lacus egestas vitae ullamcorper donec
                        aliquet. Rhoncus massa nunc ullamcorper et faucibus sit
                        eu lacus cursus.
                    </div>
                    <div
                        className={styles['body-block-description-description']}
                    >
                        Lorem ipsum dolor sit amet consectetur. Neque urna
                        cursus blandit faucibus nisi pharetra praesent.
                        Fringilla diam vestibulum neque at tristique in at
                        faucibus. Diam lacus egestas vitae ullamcorper donec
                        aliquet. Rhoncus massa nunc ullamcorper et faucibus sit
                        eu lacus cursus. Lorem ipsum dolor sit amet consectetur.
                        Neque urna cursus blandit faucibus nisi pharetra
                        praesent. Fringilla diam vestibulum neque at tristique
                        in at faucibus.
                    </div>
                    <Button
                        type='text'
                        className='carrctl-btn carrctl-btn-secondary'
                    >
                        <Link href={process.env.NEXT_PUBLIC_BOOK_URL}>Book now </Link>
                    </Button>
                </div>
            </div>
            <div className={styles['body-block-reverse']}>
                <div className={styles['body-block-car-reverse']}>
                    <img src='https://carrectly.s3.amazonaws.com/public/protection/Description.webp'></img>
                </div>

                <div className={styles['body-block-description-reverse']}>
                    <div
                        className={
                            styles['body-block-description-title-reverse']
                        }
                    >
                        Why get you Ceramic Coating?
                    </div>
                    <div
                        className={
                            styles['body-block-description-description-reverse']
                        }
                    >
                        Lorem ipsum dolor sit amet consectetur. Neque urna
                        cursus blandit faucibus nisi pharetra praesent.
                        Fringilla diam vestibulum neque at tristique in at
                        faucibus. Diam lacus egestas vitae ullamcorper donec
                        aliquet. Rhoncus massa nunc ullamcorper et faucibus sit
                        eu lacus cursus.
                    </div>
                    <div
                        className={
                            styles['body-block-description-description-reverse']
                        }
                    >
                        Lorem ipsum dolor sit amet consectetur. Neque urna
                        cursus blandit faucibus nisi pharetra praesent.
                        Fringilla diam vestibulum neque at tristique in at
                        faucibus. Diam lacus egestas vitae ullamcorper donec
                        aliquet. Rhoncus massa nunc ullamcorper et faucibus sit
                        eu lacus cursus. Lorem ipsum dolor sit amet consectetur.
                        Neque urna cursus blandit faucibus nisi pharetra
                        praesent. Fringilla diam vestibulum neque at tristique
                        in at faucibus.
                    </div>
                    <Button
                        type='text'
                        className='carrctl-btn carrctl-btn-secondary'
                    >
                        <Link href={process.env.NEXT_PUBLIC_BOOK_URL}>Book now</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export { Description }
