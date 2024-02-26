import DefaultLayout from '@/layouts/Default'
import { Whyus } from '@/components/Sections/WhyUs/Whyus'
import { Reviews } from '@/components/Sections/Reviews/Reviews'
import { Questions } from '@/components/Sections/Questions/Questions'
import MainInformation from '@/components/Sections/MainInformation/MainInformation'
import { TESLA_SERVICE_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { TESLA_SERVICE_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { TESLA_PAGE_SERVICES_LONG_CARD } from '@/components/Sections/ServicesLongCard/constants'
import { TESLA_SERVICE_PAGE_MAIN_INFORMATION } from '@/components/Sections/MainInformation/contants'
import { TESLA_SERVICE_PAGE_ADDITIONAL_SERVICES_LIST } from '@/components/Sections/AdditionalServices/constants'

import {
    AdditionalServices,
    Banner,
    MobileMenuBar,
    ServiceSelection,
    ServicesLongCard,
} from '@/components/Sections'

export default function Tesla() {
    return (
        <DefaultLayout title={'Carrectly Tesla Services'}>
            <div className='tesla-service-page-bg'>
                <Banner
                    title={`DON'T LET YOUR TESLA GO UNPROTECTED`}
                    isBoldTitle={true}
                    secondaryBtn={{
                        label: 'Get quote',
                        link: process.env.NEXT_PUBLIC_QUOTE_URL,
                    }}
                    desc={`Thankfully, Chicago’s Top Experts have you covered. At Carrectly Auto Care, we have established an exclusive team of specialists that work solely with Tesla automobiles.`}
                    isEnabledRating={false}
                />
            </div>
            <MobileMenuBar />
            <div className='container-xl container'>
                <MainInformation
                    informationItem={TESLA_SERVICE_PAGE_MAIN_INFORMATION}
                />
                <Whyus
                    title='What Benefits Do You Get as a Tesla Owner?'
                    featuresListItems={TESLA_SERVICE_PAGE_FEATURES_LIST}
                />
                <ServiceSelection />
                <ServicesLongCard services={TESLA_PAGE_SERVICES_LONG_CARD} />
                <AdditionalServices
                    isEnabledGeneralBtn={true}
                    additionalServiceListItems={
                        TESLA_SERVICE_PAGE_ADDITIONAL_SERVICES_LIST
                    }
                />
                <Reviews reviewsList={TESLA_SERVICE_PAGE_REVIEWS} />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
