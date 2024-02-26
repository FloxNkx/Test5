import DefaultLayout from '@/layouts/Default'
import { Whyus } from '@/components/Sections/WhyUs/Whyus'
import { Reviews } from '@/components/Sections/Reviews/Reviews'
import { Questions } from '@/components/Sections/Questions/Questions'
import { DETAILING_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { DETAILING_PRICES_ITEMS } from '@/components/Sections/Prices/constants'
import MainInformation from '@/components/Sections/MainInformation/MainInformation'
import { DETAILING_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { DETAILING_PAGE_WORK_STEP_LIST } from '@/components/Sections/StepWork/constants'
import { DETAILING_PAGE_MAIN_INFORMATION } from '@/components/Sections/MainInformation/contants'
import { DETAILING_PAGE_ADDITIONAL_SERVICES_LIST } from '@/components/Sections/AdditionalServices/constants'

import {
    AdditionalServices,
    Banner,
    MobileMenuBar,
    Prices,
    ServiceSelection,
    StepWork,
} from '@/components/Sections'

export default function Detailing() {
    return (
        <DefaultLayout title={'Carrectly Detailing'}>
            <div className='detailing-page-bg'>
                <Banner
                    title={'Premium Detailing Studio Located in Chicago, IL'}
                    isBoldTitle={true}
                    secondaryBtn={{
                        label: 'Get quote',
                        link: process.env.NEXT_PUBLIC_QUOTE_URL,
                    }}
                    desc={`Thoroughly cleaning and restoring car’s interiors and exteriors TORING AUTOMOTIVE EXTERIORS`}
                    isEnabledRating={false}
                />
            </div>
            <MobileMenuBar />
            <div className='container-xl container'>
                <MainInformation
                    informationItem={DETAILING_PAGE_MAIN_INFORMATION}
                />
                <Whyus featuresListItems={DETAILING_PAGE_FEATURES_LIST} />
                <ServiceSelection />
                <Prices pricesList={DETAILING_PRICES_ITEMS} />
                <AdditionalServices
                    additionalServiceListItems={
                        DETAILING_PAGE_ADDITIONAL_SERVICES_LIST
                    }
                />
                <StepWork stepWorksList={DETAILING_PAGE_WORK_STEP_LIST} />
                <Reviews reviewsList={DETAILING_PAGE_REVIEWS} />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
