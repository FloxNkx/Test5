import DefaultLayout from '@/layouts/Default'
import { MAIN_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { OIL_CHANGE_SERVICE_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { OIL_CHANGE_PAGE_MAIN_INFORMATION } from '@/components/Sections/MainInformation/contants'

import {
    Questions,
    Reviews,
    Whyus,
    Banner,
    MainInformation,
    MobileMenuBar,
} from '@/components/Sections'

export default function OilChange() {
    return (
        <DefaultLayout title={'Carrectly Oil Change'}>
            <div className='oil-change-page'>
                <div className='oil-change-page-bg'>
                    <Banner
                        title={'Oil Change'}
                        isBoldTitle={true}
                        isNoSpace={true}
                        secondaryBtn={{ isEnabled: false }}
                        desc={`Created by enthusiasts for enthusiasts. We provide automotive services for all cars to those looking for the best. Delivering peace of mind and great support`}
                        isEnabledRating={false}
                    />
                </div>
                <MobileMenuBar />
                <div className='container-xl container'>
                    <MainInformation
                        informationItem={OIL_CHANGE_PAGE_MAIN_INFORMATION}
                    />
                    <Whyus
                        featuresListItems={
                            OIL_CHANGE_SERVICE_PAGE_FEATURES_LIST
                        }
                    />
                    <Reviews reviewsList={MAIN_PAGE_REVIEWS} />
                    <Questions />
                </div>
            </div>
        </DefaultLayout>
    )
}
