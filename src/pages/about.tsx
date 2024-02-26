import DefaultLayout from '@/layouts/Default'
import Quote from '@/components/About/Quote/Quote'
import Customers from '@/components/About/Customers/Customers'
import Questions from '@/components/Sections/Questions/Questions'
import { Banner, Brands, MobileMenuBar } from '@/components/Sections'
import { ABOUT_US_IMAGES } from '@/components/Sections/Brands/contants'
import Location from '@/components/About/LocationSection/LocationSection'
import { ABOUT_US_CUSTOMERS_IMAGE } from '@/components/About/Customers/constants'
import { ABOUT_US_CONTACT_ITEMS } from '@/components/About/LocationSection/constants'
import { ABOUT_US_BENEFITS_LIST } from '@/components/About/BeginingInformation/constants'
import BeginingInformation from '@/components/About/BeginingInformation/BeginingInformation'

export default function About() {
    return (
        <DefaultLayout title={'Carrectly About US'}>
            <div className='about-us-page-bg'>
                <Banner
                    title={`About us`}
                    isBoldTitle={true}
                    secondaryBtn={{
                        label: 'Get quote',
                        link: process.env.NEXT_PUBLIC_QUOTE_URL,
                        isEnabled: true,
                    }}
                    desc={`Created by enthusiasts for enthusiasts. We provide automotive services for all cars to those looking for the best. Delivering peace of mind and great support`}
                    isEnabledRating={false}
                />
            </div>
            <MobileMenuBar />
            <div className='container-xl container'>
                <BeginingInformation benefitsList={ABOUT_US_BENEFITS_LIST} />
                <Quote />
                <div className='def-mb-30'>
                    <Brands
                        isDynamicHeight={true}
                        showItems={3}
                        imagesList={ABOUT_US_IMAGES}
                    />
                </div>
                <Customers imagesList={ABOUT_US_CUSTOMERS_IMAGE} />
                <Location contactList={ABOUT_US_CONTACT_ITEMS} />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
