import DefaultLayout from '@/layouts/Default'
import { Whyus } from '@/components/Sections/WhyUs/Whyus'
import { Reviews } from '@/components/Sections/Reviews/Reviews'
import { Questions } from '@/components/Sections/Questions/Questions'
import MainInformation from '@/components/Sections/MainInformation/MainInformation'
import { STORAGE_TRANSPORT_CAR_IMAGES } from '@/components/Sections/Brands/contants'
import { MECHANICAL_REPAIR_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'
import { MECHANICAL_PAGE_WORK_STEP_LIST } from '@/components/Sections/StepWork/constants'
import StorageTransportInfo from '@/components/StorageTransportInfo/StorageTransportInfo'

import { STORAGE_TRANSPORT_PAGE_FEATURES_LIST } from '@/components/Sections/WhyUs/constants'
import { STORAGE_TRANSPORT_CAR_PAGE_MAIN_INFORMATION } from '@/components/Sections/MainInformation/contants'
import {
    Banner,
    Brands,
    Consultation,
    MobileMenuBar,
    StepWork,
} from '@/components/Sections'

export default function StorageTransportCar() {
    return (
        <DefaultLayout title={'Carrectly Storage Transport Car'}>
            <Banner
                title={`Storage/<br class="mobile-br" />transport car`}
                isBoldTitle={true}
                isNoSpace={true}
                isDisalbedFirstBtn={true}
                secondaryBtn={{
                    label: 'Get quote',
                    link: process.env.NEXT_PUBLIC_QUOTE_URL,
                }}
                desc={`Created by enthusiasts for enthusiasts. We provide automotive services for all cars to those looking for the best. Delivering peace of mind and great support`}
                isEnabledRating={false}
            />
            <MobileMenuBar />
            <div className='container-xl container'>
                <MainInformation
                    smallImage={true}
                    informationItem={
                        STORAGE_TRANSPORT_CAR_PAGE_MAIN_INFORMATION
                    }
                />
                <Whyus
                    featuresListItems={STORAGE_TRANSPORT_PAGE_FEATURES_LIST}
                />
                <StorageTransportInfo />
                <div className='def-mb-30'>
                    <Brands
                        showItems={4}
                        imagesList={STORAGE_TRANSPORT_CAR_IMAGES}
                    />
                </div>
                <StepWork stepWorksList={MECHANICAL_PAGE_WORK_STEP_LIST} />
                <Consultation />
                <Reviews reviewsList={MECHANICAL_REPAIR_PAGE_REVIEWS} />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
