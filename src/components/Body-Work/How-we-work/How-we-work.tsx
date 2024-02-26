import styles from '@/components/Detailing/How-we-work/How-we-work.module.css'
import { Button } from 'antd'
import Link from 'next/link'

export default function HowWeWork() {
    return (
        <div className={styles['body']}>
            <div className={styles['body-title']}>How we work</div>
            <div className={styles['blocks-steps']}>
                <div className={styles['block-steps-separate']}>
                    <div className={styles['title-blocks']}>1</div>
                    <div className={styles['title-blocks-1']}>steps</div>

                    <div className={styles['description-blocks']}>
                        Lorem ipsum dolor sit amet consectetur. Neque urna
                        cursus blandit faucibus nisi pharetra praesent.
                    </div>
                </div>
                <div className={styles['block-steps-separate']}>
                    <div className={styles['title-blocks']}>2</div>
                    <div className={styles['title-blocks-1']}>steps</div>
                    <div className={styles['description-blocks']}>
                        Lorem ipsum dolor sit amet consectetur. Neque urna
                        cursus blandit faucibus nisi pharetra praesent.
                    </div>
                </div>
                <div className={styles['block-steps-separate']}>
                    <div className={styles['title-blocks']}>3</div>
                    <div className={styles['title-blocks-1']}>steps</div>
                    <div className={styles['description-blocks']}>
                        Lorem ipsum dolor sit amet consectetur. Neque urna
                        cursus blandit faucibus nisi pharetra praesent.
                    </div>
                </div>

                <div className={styles['block-steps-separate']}>
                    <div className={styles['title-blocks']}>4</div>
                    <div className={styles['title-blocks-1']}>steps</div>
                    <div className={styles['description-blocks']}>
                        Lorem ipsum dolor sit amet consectetur. Neque urna
                        cursus blandit faucibus nisi pharetra praesent.
                    </div>
                </div>
            </div>

            <Button type='text' className='carrctl-btn carrctl-btn-secondary'>
                <Link href={process.env.NEXT_PUBLIC_BOOK_URL}>Book now</Link>
            </Button>
        </div>
    )
}

export { HowWeWork }
