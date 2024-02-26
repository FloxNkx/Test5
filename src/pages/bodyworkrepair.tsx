import DefaultLayout from '@/layouts/Default'
import { Whyus } from '@/components/Sections/WhyUs/Whyus'
import CarsCard from '@/components/Sections/CarsCard/CarsCard'
import { Reviews } from '@/components/Sections/Reviews/Reviews'
import { Questions } from '@/components/Sections/Questions/Questions'
import MainInformation from '@/components/Sections/MainInformation/MainInformation'
import { BODY_WORK_PAGE_CARD_ITEMS } from '@/components/Sections/CarsCard/constants'
import { BODY_WORK_REPAIR_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { BODY_WORK_IMAGES_LIST } from '@/components/Sections/ImagesCarousel/constants'
import { BODY_WORK_REPAIR_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { BODY_WORK_REPAIR_PAGE_WORK_STEP_LIST } from '@/components/Sections/StepWork/constants'
import { BODY_WORK_REPAIR_PAGE_MAIN_INFORMATION } from '@/components/Sections/MainInformation/contants'

import {
    Banner,
    Consultation,
    ImagesCarousel,
    MobileMenuBar,
    ServiceSelection,
    StepWork,
} from '@/components/Sections'

export default function BodyWork() {
    return (
        <DefaultLayout title={'Carrectly Body Work'}>
            <div className='detailing-page-bg'>
                <Banner
                    title={`Chicago’s Top Professionals in Body Repair`}
                    isBoldTitle={true}
                    secondaryBtn={{
                        label: 'Get quote',
                        link: process.env.NEXT_PUBLIC_QUOTE_URL,
                        isEnabled: true,
                    }}
                    desc={`Carrectly Auto Care in Chicago,ensures your vehicle is both operating properly and looks great`}
                    isEnabledRating={false}
                />
            </div>
            <MobileMenuBar />
            <div className='container-xl container'>
                <MainInformation
                    informationItem={BODY_WORK_REPAIR_PAGE_MAIN_INFORMATION}
                />
                <Whyus
                    featuresListItems={BODY_WORK_REPAIR_PAGE_FEATURES_LIST}
                />
                <StepWork
                    stepWorksList={BODY_WORK_REPAIR_PAGE_WORK_STEP_LIST}
                />
                <ServiceSelection />
                <CarsCard
                    isSecondCardStyles={true}
                    carsCardListItems={BODY_WORK_PAGE_CARD_ITEMS}
                />
                <ImagesCarousel images={BODY_WORK_IMAGES_LIST} />
                <Consultation />
                <Reviews reviewsList={BODY_WORK_REPAIR_PAGE_REVIEWS} />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
