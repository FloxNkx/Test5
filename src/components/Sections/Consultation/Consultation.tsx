import { ArrowSelect, UploadIcon } from '@/components/Icons/Icons'
import {
    Button,
    Flex,
    Form,
    Input,
    Tabs,
    TabsProps,
    Select,
    Radio,
    Row,
    Upload,
} from 'antd'

import styles from './Consultation.module.css'
import { Col } from 'antd'

const { TextArea } = Input

type Props = {}

const FIRST_STEP_RENDER = () => {
    return (
        <div className='first-step-render'>
            <Row justify='start' align='middle' gutter={{ xs: 16, md: 32 }}>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='name'
                        label='Name'
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='phone'
                        label='Phone number'
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='email'
                        label='Email'
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Flex justify='center' align='middle'>
                <Button
                    type='text'
                    className='carrctl-btn carrctl-btn-secondary def-mt-28 md-mx-auto'
                >
                    Next step
                </Button>
            </Flex>
        </div>
    )
}

const SECOND_STEP_RENDER = () => {
    return (
        <div className='first-step-render'>
            <Row justify='start' align='middle' gutter={{ xs: 16, md: 32 }}>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='vehicle-make'
                        label='Vehicle make'
                        rules={[{ required: true }]}
                    >
                        <Select suffixIcon={<ArrowSelect />} />
                    </Form.Item>
                </Col>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='vehicle-year'
                        label='Vehicle year'
                        rules={[{ required: true }]}
                    >
                        <Select suffixIcon={<ArrowSelect />} />
                    </Form.Item>
                </Col>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='vin'
                        label='VIN'
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Flex justify='center' align='middle'>
                <Button
                    type='text'
                    className='carrctl-btn carrctl-btn-secondary def-mt-28 md-mx-auto'
                >
                    Next step
                </Button>
            </Flex>
        </div>
    )
}

const THIRD_STEP_RENDER = () => {
    const urgents = [
        {
            label: 'Urgently',
            key: 1,
        },
        {
            label: 'Not urgent',
            key: 2,
        },
    ]

    return (
        <div className='first-step-render'>
            <Row justify='start' align='middle' gutter={{ xs: 16, md: 32 }}>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='urgent'
                        label='How urgent?'
                        rules={[{ required: true }]}
                    >
                        <Radio.Group
                            value={urgents[0]?.key}
                            className='def-my-16 md-my-8'
                        >
                            {urgents.map((item, index) => (
                                <Radio
                                    value={item.key}
                                    key={index}
                                    className='w-full def-my-8 md-my-4 uppercase'
                                >
                                    {item.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='budget'
                        label='Select your budget'
                        rules={[{ required: true }]}
                    >
                        <Select suffixIcon={<ArrowSelect />} />
                    </Form.Item>
                </Col>
                <Col md={8} xs={24} className='md-my-8'>
                    <Form.Item
                        name='pictures'
                        label='Add a pictures'
                        rules={[{ required: true }]}
                    >
                        <Upload>
                            <Button
                                icon={<UploadIcon />}
                                className='carrctl-btn carrctl-btn-secondary carrctl-upload-icon'
                            />
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>
            <Flex className='def-mt-14'>
                <TextArea rows={2} placeholder='You can write your comment' />
            </Flex>
            <Flex justify='center' align='middle'>
                <Button
                    type='text'
                    className='carrctl-btn carrctl-btn-secondary def-mt-28 md-mx-auto'
                >
                    Next step
                </Button>
            </Flex>
        </div>
    )
}

export default function Consultation(props: Props) {
    const [form] = Form.useForm()

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '1 STEP',
            children: FIRST_STEP_RENDER(),
        },
        {
            key: '2',
            label: '2 STEP',
            children: SECOND_STEP_RENDER(),
        },
        {
            key: '3',
            label: '3 STEP',
            children: THIRD_STEP_RENDER(),
        },
    ]

    return (
        <div className={'box-xl-xxs-spacing consultation-section'}>
            <div className='carrctl-block-title def-mb-28 md-w-full'>
                Request Free Consultation
            </div>
            <Form
                form={form}
                name='control-hooks'
                className={styles['consultation-section-tab']}
            >
                <Tabs
                    defaultActiveKey='1'
                    items={items}
                    className='carrctl-tabs-default'
                />
            </Form>
        </div>
    )
}

export { Consultation }
