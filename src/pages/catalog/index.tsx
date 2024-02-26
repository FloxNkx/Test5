import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useGetCategoriesWithServices } from '@/hooks/categories/useGetCategoriesWithServices'
import { useGetServiceById } from '@/hooks/services/useGetServiceById'
import MySlider from '@/components/MySlider'
import Tabs from '@/components/Tabs'
import ServiceComponent from '@/components/ServiceComponent'
import Modal from '@/components/Modal'
import Select from '@/components/Form/Select'
import global from '@/styles/global.module.css'
import styles from './styles.module.css'
import Head from 'next/head'
import LayoutHeader from '@/components/Header'
import TheFooter from '@/components/Footer/Footer'
import { useGetCars } from '@/hooks/cars/useGetCars'
import { useGetCar } from '@/hooks/cars/useGetCar'
import { Service } from '@/interfaces/Service'
import useStore from '@/store/store'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Carousel, Image } from 'antd'

const serviceSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

const serviceImagesSettings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const CatalogPage = () => {
    const pathname = usePathname()

    const {
        addService,
        setSelectedCar: setGlobalSelectedCar,
        selectedCar: globalSelectedCar,
    } = useStore(state => ({
        addService: state.addService,
        setSelectedCar: state.setSelectedCar,
        selectedCar: state.selectedCar,
    }))

    const { cars, loading: isLoadingCars } = useGetCars()
    const [uniqueYears, setUniqueYears] = useState<string[]>([])
    const [uniqueMakes, setUniqueMakes] = useState<string[]>([])
    const [uniqueModels, setUniqueModels] = useState<string[]>([])
    const [selectedYear, setSelectedYear] = useState(
        globalSelectedCar?.year.toString() || '',
    )
    const [selectedMake, setSelectedMake] = useState(
        globalSelectedCar?.make || '',
    )
    const [selectedModel, setSelectedModel] = useState(
        globalSelectedCar?.model || '',
    )
    const [isModalAvailable, setIsModalAvailable] = useState(false)
    const [isFormError, setIsFormError] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { selectedCar } = useGetCar(selectedYear, selectedMake, selectedModel)
    const [serviceId, setServiceId] = useState()

    const { categories, loading } = useGetCategoriesWithServices(0)
    const { getService, getServiceLoading } = useGetServiceById(
        serviceId,
        selectedCar?.size,
    )
    const categorySectionRef = useRef(null)

    useEffect(() => {
        setGlobalSelectedCar(selectedCar)
    }, [selectedCar, setGlobalSelectedCar])

    useEffect(() => {
        checkAutoForm()
    }, [selectedYear, selectedMake, selectedModel])

    const handleAddToCart = (e, service: Service) => {
        e.preventDefault()
        e.stopPropagation()

        checkAutoForm()
        if (isModalAvailable) {
            addService(service)
            toast.success(`${service.name} added to cart!`, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            const simulatedEvent = {
                preventDefault: () => {},
                target: { getAttribute: () => '#auto-filter' },
            }
            scrollToForm(simulatedEvent)
        }
    }

    useEffect(() => {
        if (cars.length > 0) {
            const years = Array.from(
                new Set(cars.map(car => car.year.toString())),
            )
            const makes = Array.from(new Set(cars.map(car => car.make)))
            setUniqueYears(years)
            setUniqueMakes(makes)
        }
    }, [cars])

    useEffect(() => {
        if (selectedYear && selectedMake) {
            const models = cars
                .filter(
                    car =>
                        car.year.toString() === selectedYear &&
                        car.make === selectedMake,
                )
                .map(car => car.model)
            setUniqueModels(Array.from(new Set(models)))
        } else {
            setUniqueModels([])
        }
    }, [selectedYear, selectedMake, cars])

    const scrollToForm = e => {
        e.preventDefault()

        let href = ''
        if (e.target.tagName === 'A') {
            href = e.currentTarget.href
        } else {
            href = e.target.getAttribute('data-href')
        }

        const targetId = href?.replace(/.*\#/, '')
        const elem = document.getElementById(targetId)

        elem?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const checkAutoForm = () => {
        if (selectedYear && selectedMake && selectedModel) {
            setIsModalAvailable(true)
            setIsFormError(false)
        } else {
            setIsModalAvailable(false)
            setIsFormError(true)
        }
    }

    const getServiceById = id => {
        setServiceId(id)
    }

    const showServiceModal = e => {
        const serviceId = e.target.getAttribute('data-service-id')
        checkAutoForm()
        if (isModalAvailable && serviceId) {
            getServiceById(serviceId)
            setIsOpen(true)
        } else {
            scrollToForm(e)
        }
    }

    useEffect(() => {
        if (isModalAvailable) {
            categorySectionRef.current?.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }, [isModalAvailable])

    const onSubmit = e => {
        e.preventDefault()
        checkAutoForm()
    }

    const detailsList = (
        <ul>
            {getService?.details
                .split('•')
                .map(detail => detail.trim())
                .filter(detail => detail !== '')
                ?.map((detail, index) => (
                    <li key={index} className={styles.detailsList}>
                        {detail}
                    </li>
                ))}
        </ul>
    )

    return (
        <>
            <div className={global.body}>
                <div className={global.main}>
                    <Head>
                        <title>Carrectly Catalog</title>

                        <meta
                            name='description'
                            content='Generated by create next app'
                        />
                        <meta
                            name='viewport'
                            content='width=device-width, initial-scale=1'
                        />
                        <meta
                            name='title'
                            content=' description: Created by Carrectly Auto Care'
                        />
                        <link rel='icon' href='/favicon.ico' />
                    </Head>
                    <LayoutHeader />
                    <section
                        id='auto-filter'
                        className={`${global.section} ${styles.heroBlock}`}
                    >
                        <h1>SELECT A SERVICE FOR YOUR CAR</h1>
                        <div>
                            <form onSubmit={onSubmit}>
                                <div className={`${styles.formContent}`}>
                                    <div className={`${styles.formContentTop}`}>
                                        <Select
                                            className={styles.select}
                                            placeHolder='Year'
                                            options={uniqueYears.map(year => ({
                                                label: year,
                                                value: year,
                                            }))}
                                            value={selectedYear}
                                            onChange={newValue => {
                                                setSelectedYear(newValue)
                                                setSelectedModel('')
                                            }}
                                        />
                                        <Select
                                            className={styles.select}
                                            placeHolder='Make'
                                            options={uniqueMakes.map(make => ({
                                                label: make,
                                                value: make,
                                            }))}
                                            value={selectedMake}
                                            onChange={newValue => {
                                                setSelectedMake(newValue)
                                                setSelectedModel('')
                                            }}
                                        />
                                        <Select
                                            className={styles.select}
                                            placeHolder='Model'
                                            options={uniqueModels.map(
                                                model => ({
                                                    label: model,
                                                    value: model,
                                                }),
                                            )}
                                            value={selectedModel}
                                            onChange={newValue =>
                                                setSelectedModel(newValue)
                                            }
                                        />
                                        <button
                                            type='submit'
                                            className={`${global.btn} ${global.btn__primary}`}
                                        >
                                            Select
                                        </button>
                                    </div>
                                    {isFormError && (
                                        <p className={`${styles.formError}`}>
                                            Please enter your car
                                            make/model/year to receive most
                                            accurate pricing
                                        </p>
                                    )}
                                    <div className={styles.formBg}></div>
                                </div>
                            </form>
                            <div className={styles.bgElement1}>
                                <Image
                                    src='/assets/images/catalog-vector-1.svg'
                                    width={158}
                                    height={310}
                                    preview={false}
                                    alt='Background Image'
                                />
                            </div>
                            <div className={styles.bgElement2}>
                                <Image
                                    src='/assets/images/catalog-vector-2.svg'
                                    width={158}
                                    height={310}
                                    preview={false}
                                    alt='Background Image'
                                />
                            </div>
                        </div>
                    </section>
                    {loading ? (
                        <div className={`${styles.loader}`}>Loading...</div>
                    ) : (
                        <>
                            {categories?.map((category, index) => (
                                <section
                                    ref={
                                        index === 0 ? categorySectionRef : null
                                    }
                                    key={index}
                                    className={`${global.section} ${styles.categorySection}`}
                                >
                                    <h2>{category.name}</h2>
                                    <div className={styles.servicesSlider}>
                                        <MySlider settings={serviceSettings}>
                                            {category.services?.map(
                                                (service, key) => (
                                                    <ServiceComponent
                                                        id={service.id}
                                                        key={
                                                            service.id +
                                                            '-' +
                                                            key
                                                        }
                                                        name={service.name}
                                                        text={
                                                            service.description
                                                        }
                                                        img={
                                                            service.icon && (
                                                                <Image
                                                                    src={
                                                                        service.icon
                                                                    }
                                                                    width={136}
                                                                    height={151}
                                                                    alt='service icon'
                                                                />
                                                            )
                                                        }
                                                        link={{
                                                            text: 'Learn more',
                                                            href: isModalAvailable
                                                                ? { pathname }
                                                                : '#auto-filter',
                                                            onClick: (e) => showServiceModal(e),
                                                        }}
                                                        btn={{
                                                            text: 'Add to cart',
                                                            onClick: e =>
                                                                handleAddToCart(
                                                                    e,
                                                                    service,
                                                                ),
                                                        }}
                                                    />
                                                ),
                                            )}
                                        </MySlider>
                                    </div>
                                </section>
                            ))}
                        </>
                    )}
                </div>

                <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    closeBtnColor={'#555969'}
                    propsClass={`blog-section ${styles.modalWrap}`}
                >
                    {!getServiceLoading ? (
                        <div className={`${styles.loader}`}>Loading...</div>
                    ) : (
                        <>
                            <div className={`${styles.modalHeading}`}>
                                <h2 className='carrctl-menu-title text-xl-md uppercase'>
                                    {getService?.name}
                                </h2>
                                <h2 className='carrctl-menu-title text-xl-md def-ml-22 md-ml-0 md-mt-8 uppercase'>
                                    ${getService?.price}
                                </h2>
                            </div>
                            <div className={`${styles.modalServiceInfo}`}>
                                <div className={`${styles.modalImageSlider}`}>
                                    <Carousel
                                        dots={true}
                                        slidesToShow={1}
                                        swipe={true}
                                        responsive={[
                                            {
                                                breakpoint: 1060,
                                                settings: {
                                                    slidesToShow: 1,
                                                },
                                            },
                                            {
                                                breakpoint: 768,
                                                settings: {
                                                    slidesToShow: 1,
                                                },
                                            },
                                        ]}
                                        swipeToSlide={true}
                                        autoplay={true}
                                        className={`def-carousel-xs-navigation`}
                                    >
                                        {getService?.images?.map(
                                            (image, index) => (
                                                <div
                                                    className='def-px-10 md-px-2'
                                                    key={index}
                                                >
                                                    <Image
                                                        src={image.url}
                                                        width={'100%'}
                                                        height={'100%'}
                                                        key={index}
                                                        preview={false}
                                                        alt='Service Image'
                                                    />
                                                </div>
                                            ),
                                        )}
                                    </Carousel>
                                </div>
                                <div className={`${styles.modalTabsWrapper}`}>
                                    <Tabs
                                        className={styles.modalTabs}
                                        type='horizontal'
                                        data={[
                                            {
                                                name: 'About',
                                                content: (
                                                    <div
                                                        className={`${styles.tabContent}`}
                                                    >
                                                        <div
                                                            className={`${styles.tabContentTop}`}
                                                        >
                                                            <div
                                                                className={`${styles.tabDescription}`}
                                                            >
                                                                {
                                                                    getService?.longDescription
                                                                }
                                                            </div>
                                                            <div
                                                                className={`${styles.tabCertificates}`}
                                                            >
                                                                <Image
                                                                    src='/assets/images/icons/premium-quality-white.svg'
                                                                    width={56}
                                                                    height={50}
                                                                    preview={false}
                                                                    alt='Trust & Safety'
                                                                />
                                                                <Image
                                                                    src='/assets/images/icons/best-products-white.svg'
                                                                    width={50}
                                                                    height={50}
                                                                    preview={false}
                                                                    alt='Trust & Safety'
                                                                />
                                                                <Image
                                                                    src='/assets/images/icons/best-customer-service-white.svg'
                                                                    width={46}
                                                                    height={50}
                                                                    preview={false}
                                                                    alt='Trust & Safety'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`${styles.tabContentBottom}`}
                                                        >
                                                            <button
                                                                className={`${global.btn} ${global.btn__secondary}`}
                                                                onClick={e =>
                                                                    handleAddToCart(
                                                                        e,
                                                                        getService,
                                                                    )
                                                                }
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                ),
                                            },
                                            {
                                                name: 'Details',
                                                content: (
                                                    <div
                                                        className={`${styles.tabContent}`}
                                                    >
                                                        <div
                                                            className={`${styles.tabContentTop}`}
                                                        >
                                                            <div
                                                                className={`${styles.tabDescription}`}
                                                            >
                                                                <ul>
                                                                    {getService?.details
                                                                        .split(
                                                                            '•',
                                                                        )
                                                                        .map(
                                                                            detail =>
                                                                                detail.trim(),
                                                                        )
                                                                        .filter(
                                                                            detail =>
                                                                                detail !==
                                                                                '',
                                                                        )
                                                                        ?.map(
                                                                            (
                                                                                detail,
                                                                                index,
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    className={
                                                                                        styles.detailsList
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        detail
                                                                                    }
                                                                                </li>
                                                                            ),
                                                                        )}
                                                                </ul>
                                                            </div>
                                                            <div
                                                                className={`${styles.tabCertificates}`}
                                                            >
                                                                <Image
                                                                    src='/assets/images/icons/premium-quality-white.svg'
                                                                    width={56}
                                                                    height={50}
                                                                    preview={false}
                                                                    alt='Trust & Safety'
                                                                />
                                                                <Image
                                                                    src='/assets/images/icons/best-products-white.svg'
                                                                    width={50}
                                                                    height={50}
                                                                    preview={false}
                                                                    alt='Trust & Safety'
                                                                />
                                                                <Image
                                                                    src='/assets/images/icons/best-customer-service-white.svg'
                                                                    width={46}
                                                                    height={50}
                                                                    preview={false}
                                                                    alt='Trust & Safety'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`${styles.tabContentBottom}`}
                                                        >
                                                            <button
                                                                className={`${global.btn} ${global.btn__secondary}`}
                                                                onClick={e =>
                                                                    handleAddToCart(
                                                                        e,
                                                                        getService,
                                                                    )
                                                                }
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                ),
                                            },
                                            //TODO: Temporary comment reviews tab until we have reviews data in the admin services
                                            // {
                                            //     name: 'Reviews',
                                            //     content: (
                                            //         <div
                                            //             className={`${styles.tabContent}`}
                                            //         >
                                            //             <div
                                            //                 className={`${styles.tabContentTop}`}
                                            //             >
                                            //                 <div
                                            //                     className={`${styles.tabDescription}`}
                                            //                 >
                                            //                     {
                                            //                         getService?.longDescription
                                            //                     }
                                            //                 </div>
                                            //                 <div
                                            //                     className={`${styles.tabCertificates}`}
                                            //                 >
                                            //                     <Image
                                            //                         src='/assets/images/icons/premium-quality-white.svg'
                                            //                         width={56}
                                            //                         height={50}
                                            //                         alt='Trust & Safety'
                                            //                     />
                                            //                     <Image
                                            //                         src='/assets/images/icons/best-products-white.svg'
                                            //                         width={50}
                                            //                         height={50}
                                            //                         alt='Trust & Safety'
                                            //                     />
                                            //                     <Image
                                            //                         src='/assets/images/icons/best-customer-service-white.svg'
                                            //                         width={46}
                                            //                         height={50}
                                            //                         alt='Trust & Safety'
                                            //                     />
                                            //                 </div>
                                            //             </div>
                                            //             <div
                                            //                 className={`${styles.tabContentBottom}`}
                                            //             >
                                            //                 <button
                                            //                     className={`${global.btn} ${global.btn__secondary}`}
                                            //                     onClick={e =>
                                            //                         handleAddToCart(
                                            //                             e,
                                            //                             getService,
                                            //                         )
                                            //                     }
                                            //                 >
                                            //                     Add to cart
                                            //                 </button>
                                            //             </div>
                                            //         </div>
                                            //     ),
                                            // },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div
                                className={`def-mt-30 md-mt-12 ${styles.modalAdditionalServices}`}
                            >
                                <h2 className='carrctl-menu-title text-xl-md uppercase'>
                                    Additional Services</h2>
                                <div
                                    className={`${styles.modalAdditionalServicesSlider}`}
                                >
                                    <Carousel
                                        dots={true}
                                        slidesToShow={3}
                                        responsive={[
                                            {
                                                breakpoint: 960,
                                                settings: {
                                                    slidesToShow: 2,
                                                },
                                            },
                                            {
                                                breakpoint: 560,
                                                settings: {
                                                    slidesToShow: 1,
                                                },
                                            },
                                        ]}
                                        swipe={true}
                                        swipeToSlide={true}
                                        verticalSwiping={true}
                                        autoplay={true}
                                        className={`def-mt-20 def-carousel-xs-navigation`}
                                    >
                                        {getService?.relatedServices?.map(
                                            ({service}, index) => {
                                                return (
                                                    <div
                                                        className='def-px-10 w-full'
                                                        key={index}
                                                    >
                                                        <div className='flex flex-col justify-center items-center text-center'>
                                                            <div className='def-mb-8'>
                                                                {service?.icon && (
                                                                    <Image
                                                                        src={
                                                                            service?.icon
                                                                        }
                                                                        width={60}
                                                                        height={60}
                                                                        preview={
                                                                            false
                                                                        }
                                                                        alt='Info'
                                                                    />
                                                                )}
                                                            </div>
                                                            <h4 className='carrctl-subtitle uppercase def-mt-4 text-secondary-gray'>
                                                                {service?.name}
                                                            </h4>
                                                            <p className='def-mt-12 def-mx-26 carrctl-small-description text-secondary-gray'>
                                                                {
                                                                    service?.description
                                                                }
                                                            </p>
                                                            <button
                                                                className='carrctl-btn carrctl-btn-secondary def-mt-22'
                                                                onClick={e =>
                                                                    handleAddToCart(
                                                                        e,
                                                                        service,
                                                                    )
                                                                }
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            },
                                        )}
                                    </Carousel>
                                </div>
                            </div>
                        </>
                    )}
                </Modal>
                <TheFooter />
            </div>
        </>
    )
}

export default CatalogPage
