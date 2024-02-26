import { Button, Col, Row, Select } from 'antd'

import styles from './ServiceSelection.module.css'
import { ArrowSelect } from '@/components/Icons/Icons'
import { ServiceSelectionType } from './contants'

type Props = {
    serviceSelection?: ServiceSelectionType
}

export default function ServiceSelection(props: Props) {
    return (
        <div
            className={`${styles['carrctl-service-selection']} box-xs-spacing`}
        >
            <div
                className={`${props.serviceSelection?.isCenterTitle ? 'text-center' : 'text-left def-mr-60 md-mr-0'} carrctl-block-title`}
            >
                {props.serviceSelection?.title ||
                    'SELECT A SERVISE FOR YOUR CAR'}
            </div>

            <div
                className={`${styles['carrctl-service-selection-box']} def-mt-30`}
            >
                <Row
                    gutter={{ xl: 32, md: 8, xs: 0 }}
                    justify='center'
                    align='middle'
                >
                    <Col md={6} xs={24} className='md-my-4'>
                        <Select
                            placeholder='Year'
                            suffixIcon={<ArrowSelect />}
                        />
                    </Col>
                    <Col md={6} xs={24} className='md-my-6'>
                        <Select
                            placeholder='Make'
                            suffixIcon={<ArrowSelect />}
                        />
                    </Col>
                    <Col md={6} xs={24} className='md-my-4'>
                        <Select
                            placeholder='Model'
                            suffixIcon={<ArrowSelect />}
                        />
                    </Col>
                    <Col lg={5} md={6} xs={24}>
                        <div className='flex justify-center md-mt-10'>
                            <Button
                                type='text'
                                className='carrctl-btn carrctl-purple-btn'
                            >
                                Select
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export { ServiceSelection }
