import DefaultLayout from '@/layouts/Default'
import Whyus from '@/components/Sections/WhyUs/Whyus'
import Reviews from '@/components/Sections/Reviews/Reviews'
import Questions from '@/components/Sections/Questions/Questions'
import MainInformation from '@/components/Sections/MainInformation/MainInformation'
import { MECHANICAL_REPAIR_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { MECHANICAL_PAGE_WORK_STEP_LIST } from '@/components/Sections/StepWork/constants'
import { MECHANICAL_REPAIR_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { MECHANICAL_REPAIR_PAGE_MAIN_INFORMATION } from '@/components/Sections/MainInformation/contants'
import {
    MECHANICAL_PAGE_ADDITIONAL_SERVICES_LIST,
} from '@/components/Sections/AdditionalServices/constants'
import {
    AdditionalServices,
    Banner,
    Consultation,
    MobileMenuBar,
    ServiceSelection,
    StepWork,
} from '@/components/Sections'
import CarsCard from '@/components/Sections/CarsCard/CarsCard'
import { MECHANICAL_PAGE_CARD_ITEMS } from '@/components/Sections/CarsCard/constants'

export default function Mechanical() {
    return (
        <DefaultLayout title={'Carrectly Mechanical Repair'}>
            <div className='detailing-page-bg'>
                <Banner
                    title={`Chicago's Best Auto Repair and Maintenance Services`}
                    isBoldTitle={true}
                    secondaryBtn={{
                        label: 'Get quote',
                        link: process.env.NEXT_PUBLIC_QUOTE_URL,
                        isEnabled: true,
                    }}
                    desc={`Spare the Hassle: Carrectly Auto Care will Handle the Repairs`}
                    isEnabledRating={false}
                />
            </div>
            <MobileMenuBar />
            <div className='container-xl container'>
                <MainInformation
                    informationItem={MECHANICAL_REPAIR_PAGE_MAIN_INFORMATION}
                />
                <Whyus
                    featuresListItems={MECHANICAL_REPAIR_PAGE_FEATURES_LIST}
                />
                <StepWork stepWorksList={MECHANICAL_PAGE_WORK_STEP_LIST} />
                <ServiceSelection />
                <CarsCard carsCardListItems={MECHANICAL_PAGE_CARD_ITEMS} />
                <AdditionalServices
                    isEnabledGeneralBtn={true}
                    additionalServiceListItems={
                        MECHANICAL_PAGE_ADDITIONAL_SERVICES_LIST
                    }
                />
                <Consultation />
                <Reviews reviewsList={MECHANICAL_REPAIR_PAGE_REVIEWS} />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
