import DefaultLayout from '@/layouts/Default'
import { MOBILE_SERVICE_PRICES_ITEMS } from '@/components/Sections/Prices/constants'
import { MOBILE_SERVICE_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { MOBILE_SERVICE_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { MOBILE_SERVICE_PAGE_WORK_STEP_LIST } from '@/components/Sections/StepWork/constants'
import { MOBILE_SERVICE_PAGE_MAIN_INFORMATION } from '@/components/Sections/MainInformation/contants'
import { MOBILE_SERIVE_PAGE_ADDITIONAL_SERVICES_LIST } from '@/components/Sections/AdditionalServices/constants'

import {
    StepWork,
    ServiceSelection,
    Questions,
    Reviews,
    AdditionalServices,
    Whyus,
    Banner,
    Prices,
    MainInformation,
    MobileMenuBar,
} from '@/components/Sections'

export default function MobileServices() {
    return (
        <DefaultLayout title={'Carrectly Mobile Services'}>
            <div className='mobile-service-page'>
                <Banner
                    title={'Mobile Services'}
                    isBoldTitle={true}
                    isNoSpace={true}
                    secondaryBtn={{ isEnabled: false }}
                    desc={`Created by enthusiasts for enthusiasts. We provide automotive services for all cars to those looking for the best. Delivering peace of mind and great support`}
                    isEnabledRating={false}
                />
                <MobileMenuBar />
                <div className='container-xl container'>
                    <MainInformation
                        informationItem={MOBILE_SERVICE_PAGE_MAIN_INFORMATION}
                    />
                    <Whyus
                        featuresListItems={MOBILE_SERVICE_PAGE_FEATURES_LIST}
                    />
                    <ServiceSelection />
                    <Prices pricesList={MOBILE_SERVICE_PRICES_ITEMS} />
                    <AdditionalServices
                        additionalServiceListItems={
                            MOBILE_SERIVE_PAGE_ADDITIONAL_SERVICES_LIST
                        }
                    />
                    <StepWork
                        stepWorksList={MOBILE_SERVICE_PAGE_WORK_STEP_LIST}
                    />
                    <Reviews reviewsList={MOBILE_SERVICE_PAGE_REVIEWS} />
                    <Questions />
                </div>
            </div>
        </DefaultLayout>
    )
}
