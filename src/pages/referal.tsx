import DefaultLayout from '@/layouts/Default'
import { Banner, Reviews } from '@/components/Sections'
import { TESLA_SERVICE_PAGE_REVIEWS } from '@/components/Sections/Reviews/contants'

export default function Referals() {
    return (
        <DefaultLayout title={'Carrectly Referals'}>
            <Banner />
            <div className='container-xl container'>
                <Reviews reviewsList={TESLA_SERVICE_PAGE_REVIEWS} />
            </div>
        </DefaultLayout>
    )
}
