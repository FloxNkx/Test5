import { Flex } from 'antd'
import Link from 'next/link'
import DefaultLayout from '@/layouts/Default'
import { MobileMenuBar } from '@/components/Sections'

export default function NotFound() {
    return (
        <DefaultLayout title={'Carrectly 404'}>
            <MobileMenuBar />
            <div className='carrctl-full-page-screen'>
                <div className='carrctl-not-found-main-content h-1-2 def-mt-32 md-mt-16 relative'>
                    <div className='container-xl container text-center relative carrctl-z4'>
                        <div className='carrctl-page-text'>
                            <h1 className='text-xl-x carrctl-subtitle'>404</h1>
                            <p className='carrctl-description def-mt-18 w-1-2 line-heigh-xl'>
                                Created by enthusiasts for enthusiasts. We
                                provide automotive services for all cars to
                                those looking for the best. Delivering peace of
                                mind and great support
                            </p>
                        </div>
                        <Flex justify='center' className='def-mt-18'>
                            <Link
                                href={process.env.NEXT_PUBLIC_HOME_URL}
                                className='carrctl-btn carrctl-btn-secondary'
                            >
                                Home page
                            </Link>
                        </Flex>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
