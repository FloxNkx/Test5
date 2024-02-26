'use client'

import { SOCIAL_ITEMS } from '@/utils/constants'
import { MenuItemsType } from '@/utils/types'
import { Layout, Image, Row, Col } from 'antd'

const { Footer } = Layout

export default function TheFooter() {
    const FOOTER_INFO = [
        {
            title: 'Business Info',
            info: [
                {
                    desc: `Address:`,
                    seconds_desc: `Located all over Chicago,
                    with main service center in Ukrainian
                    Village, Chicago`,
                },
                {
                    desc: 'Phone:',
                    seconds_desc: ' Call or Text: (773) 880-9085',
                },
                {
                    desc: 'Mon-Fri: 8:00 AM to 7:00 PM',
                },
                {
                    desc: 'Sat: 8:00 AM to 4:00 PM',
                },
                {
                    desc: 'Sun: Closed',
                },
            ],
        },
    ]

    const FOOTER_LINK_ITEMS: MenuItemsType[] = [
        {
            title: 'Pages',
            links: [
                {
                    name: 'Home',
                    url: process.env.NEXT_PUBLIC_HOME_URL,
                },
                {
                    name: 'About Us',
                    url: process.env.NEXT_PUBLIC_ABOUT_US_URL,
                },
                {
                    name: 'Blogs',
                    url: process.env.NEXT_PUBLIC_BLOG_URL,
                },
            ],
        },
        {
            title: 'Services',
            links: [
                {
                    name: 'Detailing',
                    url: process.env.NEXT_PUBLIC_DETAILING_URL,
                },
                {
                    name: 'Mechanical',
                    url: process.env.NEXT_PUBLIC_MECHANICAL_URL,
                },
                {
                    name: 'Body Work',
                    url: process.env.NEXT_PUBLIC_BODY_WORK_URL,
                },
                {
                    name: 'Protectin',
                    url: process.env.NEXT_PUBLIC_PROTECTION_URL,
                },
                {
                    name: 'Aesthetics',
                    url: process.env.NEXT_PUBLIC_AESTHETICS_URL,
                },
            ],
        },
    ]

    return (
        <Footer className='footer-section carrctl-footer'>
            <div className='container container-xl'>
                <Row align={'top'} justify={'space-between'} gutter={4}>
                    <Col lg={6} xs={24}>
                        <Row align={'middle'} justify={'start'}>
                            <Col span={24}>
                                <Image
                                    src='/images/logo-footer.svg'
                                    alt='logo'
                                    preview={false}
                                    width={300}
                                    height={73}
                                />
                            </Col>
                            <Col span={24} className='def-mt-20'>
                                <p className='carrctl-simple-description text-gray'>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Neque urna cursus blandit faucibus nisi
                                    pharetra praesent. Fringilla diam vestibulum
                                    neque at tristique in at faucibus.
                                </p>
                            </Col>
                            <Col
                                span={24}
                                className='def-mt-50 md-mt-20 lg-mb-20'
                            >
                                <Row align={'middle'} justify={'space-between'}>
                                    <Col lg={12} xs={12}>
                                        <Row
                                            align={'middle'}
                                            gutter={8}
                                            justify={'start'}
                                        >
                                            {SOCIAL_ITEMS.map(
                                                (item, index: number) => (
                                                    <Col
                                                        key={index}
                                                        className='def-my-4'
                                                    >
                                                        <a
                                                            href={item.url}
                                                            target='_blank'
                                                            className='social-icon-wrap'
                                                        >
                                                            <Image
                                                                src={`/images/socials/social-${item.name}.png`}
                                                                alt={item.name}
                                                                preview={false}
                                                            />
                                                        </a>
                                                    </Col>
                                                ),
                                            )}
                                        </Row>
                                    </Col>
                                    <Col
                                        lg={12}
                                        xs={12}
                                        className='carrctl-subtitle text-gray text-right'
                                    >
                                        Carrectly {new Date().getFullYear()}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={10} xs={24}>
                        <Row align={'top'} gutter={12}>
                            {FOOTER_LINK_ITEMS.map(
                                (item: MenuItemsType, index: number) => (
                                    <Col lg={6} xs={12} key={index}>
                                        <h2 className='carrctl-subtitle uppercase'>
                                            {item.title}
                                        </h2>
                                        {item.links.map((link, idX) => (
                                            <p
                                                className='carrctl-subtitle def-my-16'
                                                key={idX}
                                            >
                                                <a href={link.url}>
                                                    {link.name}
                                                </a>
                                            </p>
                                        ))}
                                    </Col>
                                ),
                            )}
                            {FOOTER_INFO.map((item, index: number) => (
                                <Col lg={12} xs={24} key={index}>
                                    <h2 className='carrctl-subtitle uppercase def-mb-16'>
                                        {item.title}
                                    </h2>
                                    {item.info.map((info, idX) => (
                                        <div className='def-my-10' key={idX}>
                                            <p className='carrctl-subtitle'>
                                                {info.desc}
                                            </p>
                                            <p className='carrctl-subtitle def-mt-4'>
                                                {info.seconds_desc}
                                            </p>
                                        </div>
                                    ))}
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col lg={5} xs={24}>
                        <div className='carrctl-subtitle uppercase def-mb-16 lg-mt-20'>
                            LOCATION
                        </div>
                        <div className='carrctl-location'>
                            <Image
                                src='/images/carrectly-map.jpg'
                                width={236}
                                height={148}
                                alt='google-map'
                                preview={false}
                                className='carrctl-br-20'
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </Footer>
    )
}

export { TheFooter }
