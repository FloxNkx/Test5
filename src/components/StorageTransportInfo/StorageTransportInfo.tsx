import styles from './StorageTransportInfo.module.css'
import { Col, Flex, Image, Row } from 'antd'
import { STORAGE_INFO_CAR, STORAGE_INFO_LIST } from './constants'
import Link from 'next/link'

export default function StorageTransportInfo() {
    return (
        <div className='box-sm-spacing versus-section'>
            <div className='carrctl-block-title def-mb-20'>
                Lorem ipsum dolor sit amet consectetur
            </div>
            <div className={styles['versus-section-bg']}>
                <Row
                    align='bottom'
                    className={`${styles['storage-info-list']}`}
                >
                    {STORAGE_INFO_LIST?.map(
                        (item: STORAGE_INFO_CAR, index: number) => (
                            <Col
                                xs={item.colWidth}
                                className={`${styles['storage-info-col-item']}`}
                                key={index}
                            >
                                {item.items?.map((info, idX: number) => (
                                    <div
                                        className={`def-my-50 md-my-10 ${styles['storage-info-item']}`}
                                        key={idX}
                                    >
                                        {info.icon && (
                                            <Image
                                                src={`/images/${info.icon}.svg`}
                                                preview={false}
                                                alt={`info-item-icon-${idX}`}
                                                className={`${styles['storage-info-icon']} def-mb-10`}
                                            />
                                        )}
                                        <h2
                                            className={`${info?.isTitle ? 'carrctl-subtitle text-lg uppercase' : 'carrctl-description'} ${styles['storage-info-desc']}`}
                                        >
                                            {info.title}
                                        </h2>
                                    </div>
                                ))}
                            </Col>
                        ),
                    )}
                </Row>
            </div>
            <Flex justify={'center'} className='def-mt-40 md-mt-10'>
                <Link
                    href={process.env.NEXT_PUBLIC_BOOK_URL}
                    className='carrctl-btn carrctl-btn-secondary'
                >
                    Book now
                </Link>
            </Flex>
        </div>
    )
}

export { StorageTransportInfo }
