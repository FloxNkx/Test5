'use client'

import DefaultLayout from '@/layouts/Default'
import {
    Blog,
    Brands,
    HowWeWork,
    Questions,
    Reviews,
    ServiceDashboard,
    Whyus,
    Banner,
    MobileMenuBar,
} from '@/components/Sections'
import { MAIN_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { MAIN_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { MAIN_BRANDS_IMAGES } from '@/components/Sections/Brands/contants'

export default function Home() {
    return (
        <DefaultLayout title={'Carrectly Auto Care'}>
            <div className='home-page-bg'>
                <Banner
                    title={`Your Destination for All <br /> Car Services and Care`}
                    desc={`From Precision Repairs to Aesthetic Transformations.<br />Elevate Your Journey with Unrivaled Expertise and Unsurpassed Dedication`}
                />
            </div>
            <MobileMenuBar />
            <div className='container-xl container'>
                <Whyus featuresListItems={MAIN_PAGE_FEATURES_LIST} />
                <HowWeWork />
                <ServiceDashboard />
                <Brands imagesList={MAIN_BRANDS_IMAGES} />
                <Reviews reviewsList={MAIN_PAGE_REVIEWS} />
                <Blog />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
