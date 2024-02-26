import React, { useState } from 'react'
import Image from 'next/image'
import MySlider from '@/components/MySlider'
import ServiceComponent from '@/components/ServiceComponent'
import Modal from '@/components/Modal'
import { useGetServiceById } from '@/hooks/services/useGetServiceById'
import { Service } from '@/interfaces/Service'
import useStore from '@/store/store'
import { toast } from 'react-toastify'
import styles from './RelatedServices.module.css'
import global from '@/styles/global.module.css'
import Tabs from '@/components/Tabs'
import { useGetRelatedServices } from '@/hooks/services/useGetRelatedServices'
import RelatedServiceComponent from '@/components/RelatedServiceComponent'

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
const AdditionalServices = () => {
    const { addService, setSelectedCar, selectedCar, selectedServices } =
        useStore(state => ({
            addService: state.addService,
            setSelectedCar: state.setSelectedCar,
            selectedCar: state.selectedCar,
            selectedServices: state.selectedServices,
        }))

    const { relatedServices, loading } = useGetRelatedServices(selectedServices)

    const [serviceId, setServiceId] = useState()
    const { getService, getServiceLoading } = useGetServiceById(
        serviceId,
        selectedCar?.size,
    )
    const [isOpen, setIsOpen] = useState(false)

    const getServiceById = id => {
        setServiceId(id)
    }

    const showServiceModal = e => {
        const serviceId = e.target.getAttribute('data-service-id')
        if (serviceId) {
            getServiceById(serviceId)
            setIsOpen(true)
        }
    }

    const handleAddToCart = (service: Service) => {
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
    }

    return (
        <>
            <div className={global.main}>
                {loading ? (
                    <div className={`${styles.loader}`}>Loading...</div>
                ) : (
                    <section
                        className={`${global.section} ${styles.categorySection}`}
                    >
                        <h2>Need anything else?</h2>

                        <div className={styles.servicesSlider}>
                            <MySlider settings={serviceSettings}>
                                {relatedServices?.map((service, index) => (
                                    <RelatedServiceComponent
                                        key={`service-${service.id}-${index}`}
                                        id={service.id}
                                        name={service.name}
                                        text={service.description}
                                        img={
                                            service.icon && (
                                                <Image
                                                    src={service.icon}
                                                    width={136}
                                                    height={151}
                                                    alt='service icon'
                                                />
                                            )
                                        }
                                        link={{
                                            text: 'Learn more',
                                            onClick: showServiceModal,
                                        }}
                                        btn={{
                                            text: 'Add to cart',
                                            onClick: () =>
                                                handleAddToCart(service),
                                        }}
                                    />
                                ))}
                            </MySlider>
                        </div>
                    </section>
                )}
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                {getServiceLoading ? (
                    <div className={`${styles.loader}`}>Loading...</div>
                ) : (
                    <>
                        <div className={`${styles.modalHeading}`}>
                            <h2 className={`${styles.modalServiceName}`}>
                                {getService?.name}
                            </h2>
                            <h2 className={`${styles.modalServicePrice}`}>
                                ${getService?.price}
                            </h2>
                        </div>
                        <div className={`${styles.modalServiceInfo}`}>
                            <div className={`${styles.modalImageSlider}`}>
                                <MySlider settings={serviceImagesSettings}>
                                    {getService?.images?.map(image => (
                                        <Image
                                            src={image.url}
                                            width={451}
                                            height={343}
                                            alt='Service Image'
                                        />
                                    ))}
                                </MySlider>
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
                                                                alt='Trust & Safety'
                                                            />
                                                            <Image
                                                                src='/assets/images/icons/best-products-white.svg'
                                                                width={50}
                                                                height={50}
                                                                alt='Trust & Safety'
                                                            />
                                                            <Image
                                                                src='/assets/images/icons/best-customer-service-white.svg'
                                                                width={46}
                                                                height={50}
                                                                alt='Trust & Safety'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`${styles.tabContentBottom}`}
                                                    >
                                                        <button
                                                            className={`${global.btn} ${global.btn__secondary}`}
                                                            onClick={() =>
                                                                handleAddToCart(
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
                                                                alt='Trust & Safety'
                                                            />
                                                            <Image
                                                                src='/assets/images/icons/best-products-white.svg'
                                                                width={50}
                                                                height={50}
                                                                alt='Trust & Safety'
                                                            />
                                                            <Image
                                                                src='/assets/images/icons/best-customer-service-white.svg'
                                                                width={46}
                                                                height={50}
                                                                alt='Trust & Safety'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`${styles.tabContentBottom}`}
                                                    >
                                                        <button
                                                            className={`${global.btn} ${global.btn__secondary}`}
                                                            onClick={() =>
                                                                handleAddToCart(
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
                                            name: 'Reviews',
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
                                                                alt='Trust & Safety'
                                                            />
                                                            <Image
                                                                src='/assets/images/icons/best-products-white.svg'
                                                                width={50}
                                                                height={50}
                                                                alt='Trust & Safety'
                                                            />
                                                            <Image
                                                                src='/assets/images/icons/best-customer-service-white.svg'
                                                                width={46}
                                                                height={50}
                                                                alt='Trust & Safety'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`${styles.tabContentBottom}`}
                                                    >
                                                        <button
                                                            className={`${global.btn} ${global.btn__secondary}`}
                                                            onClick={() =>
                                                                handleAddToCart(
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
                                    ]}
                                />
                            </div>
                        </div>
                        <div className={`${styles.modalAdditionalServices}`}>
                            <h2>Additional Services</h2>
                            <div
                                className={`${styles.modalAdditionalServicesSlider}`}
                            >
                                <MySlider settings={serviceSettings}>
                                    {getService?.relatedServices?.map(
                                        service => {
                                            return (
                                                <div
                                                    className={`${styles.modalAdditionalService}`}
                                                >
                                                    <div
                                                        className={`${styles.modalAdditionalServiceTop}`}
                                                    >
                                                        <div
                                                            className={`${styles.modalAdditionalServiceImg}`}
                                                        >
                                                            {service
                                                                ?.relatedService
                                                                ?.icon && (
                                                                <Image
                                                                    src={
                                                                        service
                                                                            ?.relatedService
                                                                            ?.icon
                                                                    }
                                                                    width={60}
                                                                    height={60}
                                                                    alt='Info'
                                                                />
                                                            )}
                                                        </div>
                                                        <h4>
                                                            {
                                                                service
                                                                    ?.relatedService
                                                                    ?.name
                                                            }
                                                        </h4>
                                                        <p>
                                                            {
                                                                service
                                                                    ?.relatedService
                                                                    ?.description
                                                            }
                                                        </p>
                                                    </div>
                                                    <button
                                                        className={`${global.btn} ${global.btn__secondary}`}
                                                        onClick={() =>
                                                            handleAddToCart(
                                                                service?.relatedService,
                                                            )
                                                        }
                                                    >
                                                        Add to cart
                                                    </button>
                                                </div>
                                            )
                                        },
                                    )}
                                </MySlider>
                            </div>
                        </div>
                    </>
                )}
            </Modal>
        </>
    )
}

export default AdditionalServices
