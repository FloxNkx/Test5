import Link from 'next/link'
import DefaultLayout from '@/layouts/Default'
import { SOCIAL_ITEMS } from '@/utils/constants'
import { Button, Col, Flex, Row, Image } from 'antd'
import { MobileMenuBar, VariationSelection } from '@/components/Sections'
import { THANK_YOU_PAGE_VARIATIONS } from '@/components/Sections/VariationSelection/constants'
import FacebookPixelWithContactConversion from '@/utils/lib/facebookPixelWithContactConversion'

export default function ThankYou() {
    return (
        <DefaultLayout title={'Carrectly Thank You'}>
            <FacebookPixelWithContactConversion />
            <MobileMenuBar />
            <div className='thank-you-page thank-you-page-bg box-xl-x-spacing md-box-xl-x-spacing'>
                <div className='container-xl container'>
                    <h2 className='carrctl-block-title text-xl-s md-text-xl-s'>
                        Thank you for your trust!
                    </h2>
                    <h3 className='carrctl-block-title text-xl-xs def-mt-28 md-mt-16'>
                        ..We will be contacting you very soon
                    </h3>
                    <Flex
                        justify='center'
                        className='w-full def-mt-40 md-mt-16'
                    >
                        <Button
                            type='text'
                            className='carrctl-btn carrctl-purple-btn'
                        >
                            <Link href={process.env.NEXT_PUBLIC_HOME_URL}>
                                Home page
                            </Link>
                        </Button>
                    </Flex>
                    <Row
                        align={'middle'}
                        gutter={8}
                        justify={'center'}
                        className='def-mt-14 md-mt-10'
                    >
                        {SOCIAL_ITEMS.map((item, index: number) => (
                            <Col key={index} className='def-my-4'>
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
                        ))}
                    </Row>
                    <Flex justify='start' className='w-full'>
                        <VariationSelection
                            variations={THANK_YOU_PAGE_VARIATIONS}
                        />
                    </Flex>
                </div>
            </div>
        </DefaultLayout>
    )
}
