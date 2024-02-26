import DefaultLayout from '@/layouts/Default'
import { AESTHETICS_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { AESTHETIC_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { AESTHETIC_PAGE_WORK_STEP_LIST } from '@/components/Sections/StepWork/constants'
import { AESTHETIC_PAGE_MAIN_INFORMATION } from '@/components/Sections/MainInformation/contants'
import { AESTHETIC_PAGE_SERVICES_LONG_CARD } from '@/components/Sections/ServicesLongCard/constants'

import {
    Banner,
    Consultation,
    MainInformation,
    MobileMenuBar,
    Questions,
    Reviews,
    ServiceSelection,
    ServicesLongCard,
    StepWork,
    Whyus,
} from '@/components/Sections'

export default function Aesthics() {
    return (
        <DefaultLayout title={'Carrectly Aesthetics'}>
            <div className='detailing-page-bg'>
                <Banner
                    title={`Ready to Redefine Your Car's Look?`}
                    isBoldTitle={true}
                    secondaryBtn={{
                        label: 'Get quote',
                        link: process.env.NEXT_PUBLIC_QUOTE_URL,
                        isEnabled: true,
                    }}
                    desc={`Discover Tailored Solutions at Carrectly Auto Care for a Visual Makeover that go Beyond Expectations!`}
                    isEnabledRating={false}
                />
            </div>
            <MobileMenuBar />
            <div className='container-xl container'>
                <MainInformation
                    informationItem={AESTHETIC_PAGE_MAIN_INFORMATION}
                />
                <Whyus featuresListItems={AESTHETIC_PAGE_FEATURES_LIST} />
                <StepWork stepWorksList={AESTHETIC_PAGE_WORK_STEP_LIST} />
                <ServiceSelection />
                <ServicesLongCard
                    services={AESTHETIC_PAGE_SERVICES_LONG_CARD}
                />
                <Consultation />
                <Reviews reviewsList={AESTHETICS_PAGE_REVIEWS} />
                <Questions />
            </div>
        </DefaultLayout>
    )
}

export { Aesthics }
