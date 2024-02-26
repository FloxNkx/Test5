import styles from '@/components/Protection/VersusSection/VersusSection.module.css'
import { VersusType } from './contants'
import { Col, Row } from 'antd'

type Props = {
    versusListData: VersusType[]
}

export default function Versus(props: Props) {
    const { versusListData } = props

    return (
        <div className='box-xl-xxs-spacing versus-section'>
            <div className={styles['versus-section-bg']}>
                <Row justify={'space-between'} align='top' gutter={32}>
                    {versusListData?.map((item: VersusType, index: number) => (
                        <Col
                            md={8}
                            xs={24}
                            className={`${index == 1 ? 'md-mt-80' : 'md-mb-80'} list-item max-content`}
                            key={index}
                        >
                            <h2 className='carrctl-subtitle text-lg def-mb-20 md-mb-10'>
                                {item.title}
                            </h2>
                            <ul key={index} className='def-ml-16'>
                                {item.desc.map((desc: string, idX: number) => (
                                    <li
                                        className='carrctl-small-description def-my-16'
                                        key={idX}
                                    >
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export { Versus }
