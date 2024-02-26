import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Tabs from '@/components/Tabs'
import Tooltip from '@/components/Tooltip'
import Input from '@/components/Form/Input'
import TextArea from '@/components/Form/TextArea'
import Select from '@/components/Form/Select'
import RadioButton from '@/components/Form/RadioButton'
import FileUpload from '@/components/Form/FileUpload'
import global from '@/styles/global.module.css'
import styles from './styles.module.css'
import { useGetCars } from '@/hooks/cars/useGetCars'
import { useGetServices } from '@/hooks/services/useGetServices'
import { Order, OrderPipeline, OrderStatus } from '@/interfaces/Order'
import { Service } from '@/interfaces/Service'
import { Car } from '@/interfaces/Car'
import { useAddQuoteOrder } from '@/hooks/orders/quotes/useAddQuoteOrder'
import { logError } from '@/services/Logger'

const ReqFreeConsult = () => {
    const router = useRouter()
    const { cars, loading: isLoadingCars } = useGetCars()
    const { services, loading: isLoadingServices } = useGetServices(0)
    const {
        addQuoteOrder,
        isQuoteOrderSubmitting,
        addQuoteOrderError,
        addQuoteOrderSuccess,
    } = useAddQuoteOrder()

    const [selectedServices, setSelectedServices] = useState<Service[]>([])
    const [selectedServiceId, setSelectedServiceId] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const [selectedMake, setSelectedMake] = useState('')
    const [selectedModel, setSelectedModel] = useState('')
    const [uniqueYears, setUniqueYears] = useState<string[]>([])
    const [uniqueMakes, setUniqueMakes] = useState<string[]>([])
    const [uniqueModels, setUniqueModels] = useState<string[]>([])
    const [insurance, setInsurance] = useState('Not sure')
    const [preferredContactMethod, setPreferredContactMethod] =
        useState('Email')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [vin, setVin] = useState('')
    const [comments, setComments] = useState('')
    const [images, setImages] = useState<File[]>([])
    const [validation, setValidation] = useState({
        name: true,
        phone: true,
        email: true,
        vin: true,
        selectedYear: true,
        selectedMake: true,
        selectedModel: true,
        selectedServiceId: true,
        imagesOrComments: true,
    })

    const [submitAttempted, setSubmitAttempted] = useState(false)

    const bodyShopServicesIds = [19, 168, 159, 167, 30, 61]
    const protectionServicesIds = [31, 32, 33, 175, 8, 238, 239, 47]
    const aestheticsServicesIds = [149, 35, 156, 161, 111, 175, 61]

    const bodyShopServices = services.filter(service =>
        bodyShopServicesIds.includes(service.id || 0),
    )

    const protectionServices = services.filter(service =>
        protectionServicesIds.includes(service.id || 0),
    )

    const aestheticsServices = services.filter(service =>
        aestheticsServicesIds.includes(service.id || 0),
    )

    useEffect(() => {
        if (cars.length > 0) {
            const years = Array.from(
                new Set(cars.map((car: Car) => car.year.toString())),
            )
            const makes = Array.from(new Set(cars.map((car: Car) => car.make)))
            setUniqueYears(years)
            setUniqueMakes(makes)
        }
    }, [cars])

    useEffect(() => {
        if (selectedYear && selectedMake) {
            const models = cars
                .filter(
                    (car: Car) =>
                        car.year.toString() === selectedYear &&
                        car.make === selectedMake,
                )
                .map((car: Car) => car.model)
            const uniqueModels = Array.from(new Set(models))
            setUniqueModels(uniqueModels)
        } else {
            setUniqueModels([])
        }
    }, [selectedYear, selectedMake, cars])
    const handleYearChange = (value: string) => {
        setSelectedYear(value)
        setSelectedModel('')
    }

    const handleMakeChange = (value: string) => {
        setSelectedMake(value)
        setSelectedModel('')
    }
    const handleModelChange = (value: string) => {
        setSelectedModel(value)
    }

    const handleChangeInsuranceRadioBtn = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setInsurance(event.target.value)
    }

    const handleChangePreferredContactMethodRadioBtn = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPreferredContactMethod(event.target.value)
    }

    const isCheckedInsurance = (value: string) => insurance === value
    const isCheckedPreferredContactMethod = (value: string) =>
        preferredContactMethod === value

    const handleServiceChange = (value: string) => {
        setSelectedServiceId(value)

        const selectedService = services.find(
            service => service.id?.toString() === value,
        )

        if (selectedService) {
            setSelectedServices([selectedService])
        }
    }

    const handleInputChange =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setter(event.target.value)
        }
    const handleCommentsChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setComments(event.target.value)
    }

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files)
            setImages(fileArray)
        }
    }

    function fileImagesToBase64(images: File[]): Promise<string[]> {
        return Promise.all(
            images.map(image => {
                return new Promise<string>((resolve, reject) => {
                    const reader = new FileReader()
                    reader.readAsDataURL(image)
                    reader.onload = () => resolve(reader.result as string)
                    reader.onerror = error => reject(error)
                })
            }),
        )
    }

    const getServiceType = (serviceId: string): string => {
        if (bodyShopServicesIds.includes(parseInt(serviceId)))
            return 'Body Work'
        if (protectionServicesIds.includes(parseInt(serviceId)))
            return 'Protection'
        if (aestheticsServicesIds.includes(parseInt(serviceId)))
            return 'Aesthetics'

        return 'Mechanical'
    }

    const validateField = (fieldName: string, value: string): boolean => {
        return value.trim() !== ''
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitAttempted(true)
        const imagesBase64 = await fileImagesToBase64(images)

        const serviceType = getServiceType(selectedServiceId)
        let validation = {}
        switch (serviceType) {
            case 'Body Work':
                validation = {
                    name: validateField('name', name),
                    phone: validateField('phone', phone),
                    email: validateField('email', email),
                    vin: validateField('vin', vin),
                    selectedYear: validateField('selectedYear', selectedYear),
                    selectedMake: validateField('selectedMake', selectedMake),
                    selectedModel: validateField(
                        'selectedModel',
                        selectedModel,
                    ),
                    selectedServiceId: validateField(
                        'selectedServiceId',
                        selectedServiceId,
                    ),
                    imagesOrComments:
                        images.length > 0 || comments.trim() !== '',
                }
                break
            case 'Mechanical':
                validation = {
                    name: validateField('name', name),
                    phone: validateField('phone', phone),
                    email: validateField('email', email),
                    vin: validateField('vin', vin),
                    selectedYear: validateField('selectedYear', selectedYear),
                    selectedMake: validateField('selectedMake', selectedMake),
                    selectedModel: validateField(
                        'selectedModel',
                        selectedModel,
                    ),
                }
                break
            case 'Protection':
                validation = {
                    name: validateField('name', name),
                    phone: validateField('phone', phone),
                    email: validateField('email', email),
                    vin: validateField('vin', vin),
                    selectedYear: validateField('selectedYear', selectedYear),
                    selectedMake: validateField('selectedMake', selectedMake),
                    selectedModel: validateField(
                        'selectedModel',
                        selectedModel,
                    ),
                    selectedServiceId: validateField(
                        'selectedServiceId',
                        selectedServiceId,
                    ),
                }
                break
            case 'Aesthetics':
                validation = {
                    name: validateField('name', name),
                    phone: validateField('phone', phone),
                    email: validateField('email', email),
                    vin: validateField('vin', vin),
                    selectedYear: validateField('selectedYear', selectedYear),
                    selectedMake: validateField('selectedMake', selectedMake),
                    selectedModel: validateField(
                        'selectedModel',
                        selectedModel,
                    ),
                    selectedServiceId: validateField(
                        'selectedServiceId',
                        selectedServiceId,
                    ),
                }
                break
        }

        // @ts-ignore
        setValidation(validation)

        const isValidForm = Object.values(validation).every(v => v)

        if (isValidForm) {
            const newOrder: Order = {
                status: OrderStatus.PartsAndVin,
                pipeline: OrderPipeline.Quote,
                carYear: parseInt(selectedYear),
                carMake: selectedMake,
                carModel: selectedModel,
                carVin: vin,
                insurance: insurance,
                preferredContactMethod: preferredContactMethod,
                customer: {
                    firstName: name?.split(' ')[0],
                    lastName: name?.split(' ').slice(1).join(' '),
                    email: email,
                    phone: phone,
                },
                services: selectedServices,
                customerComment: comments,
                images: imagesBase64,
            }

            try {
                const response = await addQuoteOrder(newOrder)

                if (response.status === 200) {
                    await router.push('/thankyou')
                } else {
                    logError('Form submission failed:', response.statusText)
                    await router.push('/error')
                }
            } catch (error) {
                logError('Error submitting form:', error)
                await router.push('/error')
            }
        } else {
            logError('Form validation failed:', validation)
        }
    }

    return (
        <Tabs
            className={styles.rfcTabs}
            type='horizontal'
            data={[
                {
                    name: 'Body Work',
                    content: (
                        <form
                            method='POST'
                            className={styles.form}
                            onSubmit={handleSubmit}
                        >
                            <p>
                                Enjoy our hassle-free quote portal. Simply fill
                                out a quick form and get a free quote tailored
                                to your car’s needs, empowering you to restore
                                its pristine appearance without any guesswork
                            </p>
                            <div className={styles.formStep}>
                                <h4>Step 1</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your contact details</h5>
                                    <Tooltip text='Providing us with your contact information will help us best know who to reach out to'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Input
                                        className={styles.input}
                                        label='Name'
                                        type='text'
                                        onChange={handleInputChange(setName)}
                                        isRequired={true}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='Phone number'
                                        type='tel'
                                        onChange={handleInputChange(setPhone)}
                                        isRequired={true}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='Email'
                                        type='email'
                                        onChange={handleInputChange(setEmail)}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 2</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your vehicle information</h5>
                                    <Tooltip text='Please provide us with your vehicle details as it provides us with all the necessary information to provide you with the most accurate quote'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Select
                                        label='Vehicle Year'
                                        options={uniqueYears.map(year => ({
                                            label: year,
                                            value: year,
                                        }))}
                                        value={selectedYear}
                                        onChange={handleYearChange}
                                        placeHolder='Select Year'
                                        isRequired={true}
                                        validationMessage='Year is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Select
                                        label='Vehicle Make'
                                        options={uniqueMakes.map(make => ({
                                            label: make,
                                            value: make,
                                        }))}
                                        value={selectedMake}
                                        onChange={handleMakeChange}
                                        placeHolder='Select Make'
                                        isRequired={true}
                                        validationMessage='Make is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Select
                                        label='Vehicle Model'
                                        options={uniqueModels.map(model => ({
                                            label: model,
                                            value: model,
                                        }))}
                                        value={selectedModel}
                                        onChange={handleModelChange}
                                        placeHolder='Select Model'
                                        isRequired={true}
                                        validationMessage='Model is required'
                                        submitAttempted={submitAttempted}
                                    />

                                    <Input
                                        className={styles.input}
                                        label='VIN'
                                        type='text'
                                        onChange={handleInputChange(setVin)}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 3</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Going through insurance?</h5>
                                    <Tooltip text='Remember, we work with most insurance policies and handle all communications. If you already have a claim opened, let us know. If you are not sure, no worries, we can still help'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <div className={styles.radioButtonsGroup}>
                                        <RadioButton
                                            id='Yes'
                                            name='Yes'
                                            value='Yes'
                                            text='Yes'
                                            onChange={
                                                handleChangeInsuranceRadioBtn
                                            }
                                            checked={isCheckedInsurance('Yes')}
                                        />
                                        <RadioButton
                                            id='No'
                                            name='No'
                                            value='No'
                                            text='No'
                                            onChange={
                                                handleChangeInsuranceRadioBtn
                                            }
                                            checked={isCheckedInsurance('No')}
                                        />
                                        <RadioButton
                                            id='Not sure'
                                            name='Not sure'
                                            value='Not sure'
                                            text='Not sure'
                                            onChange={
                                                handleChangeInsuranceRadioBtn
                                            }
                                            checked={isCheckedInsurance(
                                                'Not sure',
                                            )}
                                        />
                                    </div>
                                    <Select
                                        className={styles.select}
                                        placeHolder='Please select...'
                                        label='Select your service'
                                        options={bodyShopServices.map(
                                            service => ({
                                                label: service.name,
                                                value:
                                                    service.id?.toString() ||
                                                    '',
                                            }),
                                        )}
                                        value={selectedServiceId}
                                        onChange={handleServiceChange}
                                        isRequired={true}
                                        validationMessage={
                                            'Service is required'
                                        }
                                        submitAttempted={submitAttempted}
                                    />
                                    <FileUpload
                                        className={styles.fileUpload}
                                        label='Add a pictures'
                                        onChange={handleImagesChange}
                                        isRequired={true}
                                        validationMessage='Please upload your images'
                                        submitAttempted={submitAttempted}
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <TextArea
                                        placeholder='You can write your comment'
                                        onChange={handleCommentsChange}
                                    />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className={`${global.btn} ${global.btn__secondary}`}
                            >
                                Submit
                            </button>
                        </form>
                    ),
                    styles: `${styles.tabBody} ${styles.tabContent1}`,
                },
                {
                    name: 'Mechanical',
                    content: (
                        <form
                            method='POST'
                            className={styles.form}
                            onSubmit={handleSubmit}
                        >
                            <p>
                                Enjoy our hassle-free quote portal. Simply fill
                                out a quick form and get a free quote tailored
                                to your car’s needs, empowering you to restore
                                its pristine appearance without any guesswork
                            </p>
                            <div className={styles.formStep}>
                                <h4>Step 1</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your contact details</h5>
                                    <Tooltip text='Providing us with your contact information will help us best know who to reach out to'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Input
                                        className={styles.input}
                                        label='Name'
                                        type='text'
                                        onChange={handleInputChange(setName)}
                                        isRequired={true}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='Phone number'
                                        type='tel'
                                        onChange={handleInputChange(setPhone)}
                                        isRequired={true}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='Email'
                                        type='email'
                                        onChange={handleInputChange(setEmail)}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 2</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your vehicle information</h5>
                                    <Tooltip text='Please provide us with your vehicle details as it provides us with all the necessary information to provide you with the most accurate quote'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Select
                                        label='Vehicle Year'
                                        options={uniqueYears.map(year => ({
                                            label: year,
                                            value: year,
                                        }))}
                                        value={selectedYear}
                                        onChange={handleYearChange}
                                        placeHolder='Select Year'
                                        isRequired={true}
                                        validationMessage='Year is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Select
                                        label='Vehicle Make'
                                        options={uniqueMakes.map(make => ({
                                            label: make,
                                            value: make,
                                        }))}
                                        value={selectedMake}
                                        onChange={handleMakeChange}
                                        placeHolder='Select Make'
                                        isRequired={true}
                                        validationMessage='Make is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Select
                                        label='Vehicle Model'
                                        options={uniqueModels.map(model => ({
                                            label: model,
                                            value: model,
                                        }))}
                                        value={selectedModel}
                                        onChange={handleModelChange}
                                        placeHolder='Select Model'
                                        isRequired={true}
                                        validationMessage='Model is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='VIN'
                                        type='text'
                                        onChange={handleInputChange(setVin)}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 3</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>How best to reach you?</h5>
                                    <Tooltip text='Please let us know how you would like us to reach out to you. We will make sure to reach out to you in the best way possible'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <div className={styles.radioButtonsGroup}>
                                        <RadioButton
                                            id='Email'
                                            name='Email'
                                            value='Email'
                                            text='Email'
                                            onChange={
                                                handleChangePreferredContactMethodRadioBtn
                                            }
                                            checked={isCheckedPreferredContactMethod(
                                                'Email',
                                            )}
                                        />
                                        <RadioButton
                                            id='Phone'
                                            name='Phone'
                                            value='Phone'
                                            text='Phone'
                                            onChange={
                                                handleChangePreferredContactMethodRadioBtn
                                            }
                                            checked={isCheckedPreferredContactMethod(
                                                'Phone',
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <TextArea
                                        placeholder='You can write your comment'
                                        onChange={handleCommentsChange}
                                    />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className={`${global.btn} ${global.btn__secondary}`}
                            >
                                Submit
                            </button>
                        </form>
                    ),
                    styles: `${styles.tabBody} ${styles.tabContent1}`,
                },
                {
                    name: 'Protection',
                    content: (
                        <form
                            method='POST'
                            className={styles.form}
                            onSubmit={handleSubmit}
                        >
                            <p>
                                Enjoy our hassle-free quote portal. Simply fill
                                out a quick form and get a free quote tailored
                                to your car’s needs, empowering you to restore
                                its pristine appearance without any guesswork
                            </p>
                            <div className={styles.formStep}>
                                <h4>Step 1</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your contact details</h5>
                                    <Tooltip text='Providing us with your contact information will help us best know who to reach out to'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Input
                                        className={styles.input}
                                        label='Name'
                                        type='text'
                                        onChange={handleInputChange(setName)}
                                        isRequired={true}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='Phone number'
                                        type='tel'
                                        onChange={handleInputChange(setPhone)}
                                        isRequired={true}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='Email'
                                        type='email'
                                        onChange={handleInputChange(setEmail)}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 2</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your vehicle information</h5>
                                    <Tooltip text='Please provide us with your vehicle details as it provides us with all the necessary information to provide you with the most accurate quote'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Select
                                        label='Vehicle Year'
                                        options={uniqueYears.map(year => ({
                                            label: year,
                                            value: year,
                                        }))}
                                        value={selectedYear}
                                        onChange={handleYearChange}
                                        placeHolder='Select Year'
                                        isRequired={true}
                                        validationMessage='Year is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Select
                                        label='Vehicle Make'
                                        options={uniqueMakes.map(make => ({
                                            label: make,
                                            value: make,
                                        }))}
                                        value={selectedMake}
                                        onChange={handleMakeChange}
                                        placeHolder='Select Make'
                                        isRequired={true}
                                        validationMessage='Make is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Select
                                        label='Vehicle Model'
                                        options={uniqueModels.map(model => ({
                                            label: model,
                                            value: model,
                                        }))}
                                        value={selectedModel}
                                        onChange={handleModelChange}
                                        placeHolder='Select Model'
                                        isRequired={true}
                                        validationMessage='Model is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='VIN'
                                        type='text'
                                        onChange={handleInputChange(setVin)}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 3</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>How best to reach you?</h5>
                                    <Tooltip text='Choose whether you prefer to be contacted via email or phone. This helps us ensure we reach out in the way thats most convenient for you'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <div className={styles.radioButtonsGroup}>
                                        <RadioButton
                                            id='Email'
                                            name='Email'
                                            value='Email'
                                            text='Email'
                                            onChange={
                                                handleChangePreferredContactMethodRadioBtn
                                            }
                                            checked={isCheckedPreferredContactMethod(
                                                'Email',
                                            )}
                                        />
                                        <RadioButton
                                            id='Phone'
                                            name='Phone'
                                            value='Phone'
                                            text='Phone'
                                            onChange={
                                                handleChangePreferredContactMethodRadioBtn
                                            }
                                            checked={isCheckedPreferredContactMethod(
                                                'Phone',
                                            )}
                                        />
                                    </div>
                                    <Select
                                        className={styles.select}
                                        placeHolder='Please select...'
                                        label='Select your service'
                                        options={protectionServices.map(
                                            service => ({
                                                label: service.name,
                                                value:
                                                    service.id?.toString() ||
                                                    '',
                                            }),
                                        )}
                                        value={selectedServiceId}
                                        onChange={handleServiceChange}
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <TextArea
                                        placeholder='You can write your comment'
                                        onChange={handleCommentsChange}
                                    />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className={`${global.btn} ${global.btn__secondary}`}
                            >
                                Submit
                            </button>
                        </form>
                    ),
                    styles: `${styles.tabBody} ${styles.tabContent1}`,
                },
                {
                    name: 'Aesthetics',
                    content: (
                        <form
                            method='POST'
                            className={styles.form}
                            onSubmit={handleSubmit}
                        >
                            <p>
                                Enjoy our hassle-free quote portal. Simply fill
                                out a quick form and get a free bodywork quote
                                tailored to your car’s needs, empowering you to
                                restore its pristine appearance without any
                                guesswork
                            </p>
                            <div className={styles.formStep}>
                                <h4>Step 1</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your contact details</h5>
                                    <Tooltip text='Providing us with your contact information will help us best know who to reach out to'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Input
                                        className={styles.input}
                                        label='Name'
                                        type='text'
                                        onChange={handleInputChange(setName)}
                                        isRequired={true}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='Phone number'
                                        type='tel'
                                        onChange={handleInputChange(setPhone)}
                                        isRequired={true}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='Email'
                                        type='email'
                                        onChange={handleInputChange(setEmail)}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 2</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your vehicle information</h5>
                                    <Tooltip text='Please provide us with your vehicle details as it provides us with all the necessary information to provide you with the most accurate quote'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Select
                                        label='Vehicle Year'
                                        options={uniqueYears.map(year => ({
                                            label: year,
                                            value: year,
                                        }))}
                                        value={selectedYear}
                                        onChange={handleYearChange}
                                        placeHolder='Select Year'
                                        isRequired={true}
                                        validationMessage='Year is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Select
                                        label='Vehicle Make'
                                        options={uniqueMakes.map(make => ({
                                            label: make,
                                            value: make,
                                        }))}
                                        value={selectedMake}
                                        onChange={handleMakeChange}
                                        placeHolder='Select Make'
                                        isRequired={true}
                                        validationMessage='Make is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Select
                                        label='Vehicle Model'
                                        options={uniqueModels.map(model => ({
                                            label: model,
                                            value: model,
                                        }))}
                                        value={selectedModel}
                                        onChange={handleModelChange}
                                        placeHolder='Select Model'
                                        isRequired={true}
                                        validationMessage='Model is required'
                                        submitAttempted={submitAttempted}
                                    />
                                    <Input
                                        className={styles.input}
                                        label='VIN'
                                        type='text'
                                        onChange={handleInputChange(setVin)}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 3</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>How best to reach you?</h5>
                                    <Tooltip text='Choose whether you prefer to be contacted via email or phone. This helps us ensure we reach out in the way thats most convenient for you.'>
                                        <Image
                                            src='/assets/images/icons/info.svg'
                                            width={19}
                                            height={19}
                                            alt='Info'
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <div className={styles.radioButtonsGroup}>
                                        <RadioButton
                                            id='Email'
                                            name='Email'
                                            value='Email'
                                            text='Email'
                                            onChange={
                                                handleChangePreferredContactMethodRadioBtn
                                            }
                                            checked={isCheckedPreferredContactMethod(
                                                'Email',
                                            )}
                                        />
                                        <RadioButton
                                            id='Phone'
                                            name='Phone'
                                            value='Phone'
                                            text='Phone'
                                            onChange={
                                                handleChangePreferredContactMethodRadioBtn
                                            }
                                            checked={isCheckedPreferredContactMethod(
                                                'Phone',
                                            )}
                                        />
                                    </div>
                                    <Select
                                        className={styles.select}
                                        placeHolder='Please select...'
                                        label='Select your service'
                                        options={aestheticsServices.map(
                                            service => ({
                                                label: service.name,
                                                value:
                                                    service.id?.toString() ||
                                                    '',
                                            }),
                                        )}
                                        value={selectedServiceId}
                                        onChange={handleServiceChange}
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <TextArea
                                        placeholder='You can write your comment'
                                        onChange={handleCommentsChange}
                                    />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className={`${global.btn} ${global.btn__secondary}`}
                            >
                                Submit
                            </button>
                        </form>
                    ),
                    styles: `${styles.tabBody} ${styles.tabContent1}`,
                },
            ]}
        />
    )
}

export default ReqFreeConsult
