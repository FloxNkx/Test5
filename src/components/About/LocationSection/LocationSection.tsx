import React from 'react'
import { Col, Flex, Image, Row } from 'antd'
import { ContactItemType } from './constants'

type Props = {
    contactList: ContactItemType[]
}

export default function Location(props: Props) {
    const { contactList } = props

    return (
        <div className='location-section box-sm-spacing def-mt-30'>
            <div className='carrctl-block-title uppercase def-mb-24 md-mb-10 def-mr-60 md-mr-0'>
                where are we?
            </div>
            <Row
                gutter={70}
                justify={'center'}
                align={'top'}
                className='def-mb-36 md-mb-16'
            >
                {contactList?.map((item: ContactItemType, index: number) => (
                    <Col md={7} xs={24} key={index} className='md-my-10'>
                        <Flex gap={16} align={'middle'} className='def-mb-12'>
                            <Image
                                src={`/images/${item.icon}.svg`}
                                alt={`item-${index}`}
                                preview={false}
                                className='w-full h-full image-cover'
                            />
                            <h3 className='carrctl-subtitle uppercase'>
                                {item.title}
                            </h3>
                        </Flex>
                        {item.desc?.map((desc: string, idX: number) => (
                            <p
                                className='carrctl-card-description def-ml-24 text-white def-my-4'
                                key={idX}
                                dangerouslySetInnerHTML={{ __html: desc }}
                            />
                        ))}
                    </Col>
                ))}
            </Row>
            <Flex justify={'center'} align={'middle'}>
                <Image
                    src={'/images/about-us/about-map.webp'}
                    alt={`location-map`}
                    preview={false}
                    className='w-full h-full image-cover carrctl-br-20'
                />
            </Flex>
        </div>
    )
}

export { Location }
