import styles from '@/components/Sections/HowWeWork/HowWeWork.module.css'
import { Col, Flex, Row } from 'antd'

export default function HowWeWork() {
    const HowWorkList = [
        {
            title: 'REQUEST',
            desc: `Book any vehicle service in advance or on-demand at a
            guaranteed upfront price with Chicago’s Best Auto Care
            Experts`,
        },
        {
            title: 'PICK UP',
            desc: `Our supportive team is here to answer all your questions
            and confirm your priority service. Once scheduled, we
            coordinate a complimentary concierge vehicle pick-up at
            your convenience`,
        },
        {
            title: 'SERVICE',
            desc: `Your service begins immediately with our professional
            technicans. Stay informed with regular updates, and we
            seek your approval before any additional repairs or
            services are performed`,
        },
        {
            title: 'DROP OFF',
            desc: `Your vehicle is delivered back to you, wherever you are
            in Chicago. Enjoy the convenience of paying online once
            you have your car back and are satisfied with the
            service.`,
        },
    ]

    return (
        <div className='box-sm-spacing'>
            <div className='carrctl-block-title'>HOW WE WORK</div>

            <Row
                gutter={16}
                align={'top'}
                justify={'center'}
                className={`def-mt-40 ${styles['how-we-work-item-list']}`}
            >
                {HowWorkList?.map((item, index: number) => (
                    <Col
                        className={`${styles['feature-item-box']} ${
                            index == 0 || index == 1
                                ? styles['how-we-work-active-item']
                                : ''
                        } gutter-row def-my-10`}
                        xs={24}
                        md={6}
                        key={index}
                    >
                        <Flex
                            vertical={true}
                            align='center'
                            justify='flex-start'
                            className={`${styles['how-we-work']} text-center md-flex-row`}
                        >
                            <div className={styles.circle} />
                            <div className={styles.boxContent}>
                                <h2
                                    className={`${styles['work-title']} how-we-work-title carrctl-subtitle def-mt-8`}
                                >
                                    {item.title}
                                </h2>
                                <p
                                    className={`${styles['work-desc']} how-we-work-desc def-mt-12 carrctl-small-description def-px-20 md-px-0`}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </Flex>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export { HowWeWork }
