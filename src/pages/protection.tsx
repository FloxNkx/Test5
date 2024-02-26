import DefaultLayout from '@/layouts/Default'
import Versus from '@/components/Protection/VersusSection/VersusSection'
import { PROTECTION_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { PROTECTION_PAGE_DATA } from '@/components/Protection/VersusSection/contants'
import { PROTECTION_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { PROTECTION_SERVICE_PRICES_ITEMS } from '@/components/Sections/Prices/constants'
import CarDemonstration from '@/components/Protection/CarDemonstration/CarDemonstration'
import { PROTECTION_CAR_LIST_ITEMS } from '@/components/Protection/CarDemonstration/constants'

import {
    PROTECTION_PAGE_SECOND_SERVICE,
    PROTECTION_PAGE_SERVICE,
} from '@/components/Sections/ServiceSelection/contants'
import {
    PROTECTION_PAGE_MAIN_INFORMATION,
    PROTECTION_PAGE_SECOND_MAIN_INFORMATION,
} from '@/components/Sections/MainInformation/contants'
import {
    Banner,
    Consultation,
    MainInformation,
    MobileMenuBar,
    Prices,
    Questions,
    Reviews,
    ServiceSelection,
    Whyus,
} from '@/components/Sections'

export default function Protection() {
    return (
        <DefaultLayout title={'Carrectly Protection'}>
            <div className='detailing-page-bg'>
                <Banner
                    title={`Chicago’s Premium Protection Specialists`}
                    isBoldTitle={true}
                    secondaryBtn={{
                        label: 'Get quote',
                        link: process.env.NEXT_PUBLIC_QUOTE_URL,
                        isEnabled: true,
                    }}
                    isSpaceAfterImages={true}
                    isNoSpace={false}
                    desc={`There is no better option than Carrectly Auto Care`}
                    isEnabledRating={false}
                />
            </div>
            <MobileMenuBar />
            <div className='container-xl container'>
                <MainInformation
                    informationItem={PROTECTION_PAGE_MAIN_INFORMATION}
                />
                <MainInformation
                    reverse={true}
                    informationItem={PROTECTION_PAGE_SECOND_MAIN_INFORMATION}
                />
                <Whyus featuresListItems={PROTECTION_PAGE_FEATURES_LIST} />
                <Versus versusListData={PROTECTION_PAGE_DATA} />
                <ServiceSelection serviceSelection={PROTECTION_PAGE_SERVICE} />
                <Prices pricesList={PROTECTION_SERVICE_PRICES_ITEMS} />
                <CarDemonstration carsList={PROTECTION_CAR_LIST_ITEMS} />
                <ServiceSelection
                    serviceSelection={PROTECTION_PAGE_SECOND_SERVICE}
                />
                <Consultation />
                <Reviews reviewsList={PROTECTION_PAGE_REVIEWS} />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
