import DefaultLayout from '@/layouts/Default'
import { Banner, Questions } from '@/components/Sections'

export default function Book() {
    return (
        <DefaultLayout title={'Carrectly Booking'}>
            <div className='container-xl container'>
                <Banner />
                <Questions />
            </div>
        </DefaultLayout>
    )
}
