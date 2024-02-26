import { Col, Flex, Row } from 'antd'

import styles from './StepWork.module.css'
import { WorkStepItemType } from './constants'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
    stepWorksList: WorkStepItemType[]
}

export default function StepWork(props: Props) {
    const { stepWorksList } = props

    const [activeWorkItem, setActiveWorkItem] = useState(1)

    return (
        <div
            className={`${styles['carrctl-step-work-selection']} box-xs-spacing`}
        >
            <div className='carrctl-block-title def-mr-60 md-mr-0'>
                HOW WE WORK
            </div>

            <div
                className={`${styles['carrctl-step-work-selection-box']} def-mt-30`}
            >
                <Row
                    gutter={{ xl: 48, lg: 16, md: 8, xs: 0 }}
                    justify='center'
                    align='middle'
                    className={`${styles['carrctl-step-work-list-item']}`}
                >
                    {stepWorksList?.map(
                        (item: WorkStepItemType, index: number) => (
                            <Col
                                lg={6}
                                md={12}
                                xs={24}
                                key={index}
                                className={`${styles['carrctl-step-work-col']} align-stretch lg-my-4 md-my-2 text-center`}
                            >
                                <div
                                    className={`${styles['carrctl-step-work-item']} h-full ${activeWorkItem == index ? styles['carrctl-step-active'] : ''}`}
                                    onClick={() => setActiveWorkItem(index)}
                                    onMouseEnter={() => setActiveWorkItem(null)}
                                    onMouseLeave={() => setActiveWorkItem(1)}
                                >
                                    <h2 className='carrctl-small-description text-xl-s text-gray'>
                                        {index + 1}
                                    </h2>
                                    <h3 className='uppercase carrctl-subtitle text-gray'>
                                        {item.title || 'Step'}
                                    </h3>
                                    <p className='carrctl-small-description def-mt-10 text-gray md-mx-4'>
                                        {item.desc}
                                    </p>
                                </div>
                            </Col>
                        ),
                    )}
                </Row>
                <Flex justify={'center'} className='def-mt-36 md-mt-16'>
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
export { StepWork }
