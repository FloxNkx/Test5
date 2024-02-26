import DefaultLayout from '@/layouts/Default'

export default function Blog() {
    return (
        <DefaultLayout title={'Carrectly Blog'}>
            <div className='container-xl container'>
                <div className='text-white h-1-2 flex items-center justify-center'>This is blog main page</div>
            </div>
        </DefaultLayout>
    )
}
