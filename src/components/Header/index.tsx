import React, { useState } from 'react'
import { MenuItemsType } from '@/utils/types'
import { Layout, Button, Image, Col, Row, Flex, Drawer, Collapse } from 'antd'

import styles from './Header.module.css'
import Link from 'next/link'
import useStore from '@/store/store'

const { Header } = Layout

export default function LayoutHeader() {
    const [collapsed, setCollapsed] = useState(false)
    const { selectedServices } = useStore(state => ({
        selectedServices: state.selectedServices,
    }))

    const MENU_ITEMS: MenuItemsType[] = [
        {
            title: 'OUR Services',
            links: [
                {
                    name: 'Detailing',
                    url: process.env.NEXT_PUBLIC_DETAILING_URL,
                },
                {
                    name: 'Mechanical Repair',
                    url: process.env.NEXT_PUBLIC_MECHANICAL_URL,
                },
                {
                    name: 'Body Work',
                    url: process.env.NEXT_PUBLIC_BODY_WORK_URL,
                },
                {
                    name: 'Protection',
                    url: process.env.NEXT_PUBLIC_PROTECTION_URL,
                },
                {
                    name: 'Aesthics',
                    url: process.env.NEXT_PUBLIC_AESTHETICS_URL,
                },
            ],
        },
        {
            title: 'OUR company',
            links: [
                {
                    name: 'Home',
                    url: process.env.NEXT_PUBLIC_HOME_URL,
                },
                {
                    name: 'ABOUT US',
                    url: process.env.NEXT_PUBLIC_ABOUT_US_URL,
                },
                {
                    name: 'BLOGS',
                    url: process.env.NEXT_PUBLIC_BLOG_URL,
                },
            ],
        },
        {
            title: 'Additional',
            links: [
                {
                    name: 'TESLA CUSTOMERS',
                    url: process.env.NEXT_PUBLIC_TESTLA_CUSTOMERS_URL,
                },
                {
                    name: 'MOBILE SERVICES',
                    url: process.env.NEXT_PUBLIC_MOBILE_CUSTOMERS_URL,
                },
                {
                    name: 'OIL CHANGE',
                    url: process.env.NEXT_PUBLIC_OILCHANGE_URL,
                },
                {
                    name: 'STORAGE / TRANSPORT CAR',
                    url: process.env.NEXT_PUBLIC_STORAGE_URL,
                },
                {
                    name: 'MORE',
                    url: process.env.NEXT_PUBLIC_MORE_URL,
                },
            ],
        },
    ]

    return (
        <Header className='container container-xl carrctl-header'>
            <Drawer
                placement={'top'}
                width={500}
                open={collapsed}
                className='burger-menu-content'
                classNames={{ mask: 'burger-menu-content-wrap' }}
            >
                <div className='container container-xl'>
                    <p
                        className='cursor-pointer uppercase carrctl-subtitle text-right w-full def-mb-10 text-sm md-mt-10'
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        Close
                    </p>
                    <Row
                        gutter={32}
                        justify={'space-between'}
                        align={'top'}
                        className='lg-hide'
                    >
                        {MENU_ITEMS?.map(
                            (item: MenuItemsType, index: number) => (
                                <Col span={8} key={index}>
                                    <h2 className='def-mb-10 carrctl-menu-title'>
                                        {item.title}
                                    </h2>
                                    {item.links?.map((link, idX) => (
                                        <div
                                            className='def-my-18 def-mx-8'
                                            key={idX}
                                        >
                                            <Link
                                                href={link.url}
                                                className='carrctl-subtitle text-xl uppercase'
                                            >
                                                {link.name}
                                            </Link>
                                        </div>
                                    ))}
                                </Col>
                            ),
                        )}
                    </Row>
                    <Collapse
                        bordered={false}
                        expandIconPosition='end'
                        accordion={true}
                        className='hide lg-show header-collapse'
                    >
                        {MENU_ITEMS?.map(
                            (item: MenuItemsType, index: number) => (
                                <Collapse.Panel
                                    header={item.title}
                                    key={index}
                                    className='w-full'
                                >
                                    {item.links?.map((link, idX) => (
                                        <div
                                            className='def-my-18 md-my-8 def-mx-8'
                                            key={idX}
                                        >
                                            <Link
                                                href={link.url}
                                                className='carrctl-subtitle text-xl uppercase'
                                            >
                                                {link.name}
                                            </Link>
                                        </div>
                                    ))}
                                </Collapse.Panel>
                            ),
                        )}
                    </Collapse>
                    <p className='uppercase carrctl-subtitle text-right w-full def-mt-10 text-sm text-gray phone-number'>
                        (773) 800-9085
                    </p>
                </div>
            </Drawer>
            <Row align={'middle'} justify={'center'}>
                <Col xl={8} md={8} xs={4}>
                    <Row align={'middle'} gutter={24} justify={'center'}>
                        <Col xl={6} lg={8} md={8} xs={24}>
                            <Button
                                type='text'
                                className={`${
                                    collapsed
                                        ? styles['burger-menu-collapsed']
                                        : ''
                                } burger-menu`}
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                <div className={styles['first-line']} />
                                <div className={styles['second-line']} />
                                <div className={styles['third-line']} />
                            </Button>
                        </Col>
                        <Col
                            xl={18}
                            lg={16}
                            md={16}
                            xs={16}
                            className='md-hide'
                        >
                            <Link href={process.env.NEXT_PUBLIC_CONTACTS_URL}>
                                <Button type='text' className='carrctl-btn'>
                                    Contact us
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col xl={8} lg={6} md={6} xs={18}>
                    <Flex justify='center' align='middle'>
                        <Link href={process.env.NEXT_PUBLIC_HOME_URL}>
                            <div className='md-hide flex'>
                                <Image
                                    width={134}
                                    height={95}
                                    src='https://carrectly.s3.amazonaws.com/public/main/logo.webp'
                                    alt='Carrectly Logo'
                                    preview={false}
                                />
                            </div>
                            <div className='hide md-show'>
                                <Image
                                    width={44}
                                    height={44}
                                    src='/images/mobile-logo.svg'
                                    alt='Carrectly Logo'
                                    preview={false}
                                />
                            </div>
                        </Link>
                    </Flex>
                </Col>
                <Col xl={8} md={10} xs={2}>
                    <Row
                        align={'middle'}
                        justify={'end'}
                        gutter={{ xl: 24, lg: 20, sm: 20 }}
                    >
                        <Col sm={11} className='md-hide'>
                            <Link href={process.env.NEXT_PUBLIC_QUOTE_URL}>
                                <Button type='text' className='carrctl-btn'>
                                    Quote
                                </Button>
                            </Link>
                        </Col>
                        <Col sm={11} className='md-hide'>
                            <Link href={process.env.NEXT_PUBLIC_CATALOG_URL}>
                                <Button
                                    type='text'
                                    className='carrctl-btn carrctl-btn-secondary'
                                >
                                    Book now
                                </Button>
                            </Link>
                        </Col>
                        <Col md={2} xs={24} className='text-right'>
                            <Button type='text' className='cart-btn'>
                                {selectedServices.length > 0 && (
                                    <span className={styles.cartItemCount}>
                                        {selectedServices.length}
                                    </span>
                                )}
                                <Link href={process.env.NEXT_PUBLIC_BOOK_URL}>
                                    <Image
                                        width={22}
                                        height={22}
                                        src='/images/card.svg'
                                        alt='Carrectly Logo'
                                        preview={false}
                                    />
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    )
}
export { LayoutHeader }
