import React, { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import Tooltip from '@/components/Tooltip'
import Input from '@/components/Form/Input'
import TextArea from '@/components/Form/TextArea'
import RadioButton from '@/components/Form/RadioButton'
import Checkbox from '@/components/Form/Checkbox'
import StepByStep from '@/components/StepByStep'
import global from '@/styles/global.module.css'
import styles from './styles.module.css'
import { Order, OrderPipeline, OrderStatus } from '@/interfaces/Order'
import { useAddBookingOrder } from '@/hooks/orders/bookings/useAddBookingOrder'
import { logError, logInfo } from '@/services/Logger'
import { useRouter } from 'next/router'
import { useGetEstimatedTime } from '@/hooks/services/useGetEstimatedTime'
import useStore from '@/store/store'
import { toast } from 'react-toastify'
import { useGetEstimatedPrice } from '@/hooks/services/useGetEstimatedPrice'
import PlacesAutocomplete from '@/components/Form/PlaceAutocomplete/PlaceAutocomplete'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import RelatedServices from '@/components/RelatedServices/RelatedServices'

const FormStep1 = ({
    pickupAddress,
    setPickupAddress,
    isDropOffAddress,
    setIsDropOffAddress,
    dropOffAddress,
    setDropOffAddress,
    addressComment,
    setAddressComment,
    onNext,
}) => {
    const handlePickupAddressSelect = (selectedPlace: any | null) => {
        if (selectedPlace) {
            setPickupAddress(selectedPlace.description)
        } else {
            setPickupAddress('')
        }
    }

    const handleDropOffAddressSelect = (selectedPlace: any | null) => {
        if (selectedPlace) {
            setDropOffAddress(selectedPlace.description)
        } else {
            setDropOffAddress('')
        }
    }

    return (
        <div className={`${styles.stepForm} ${styles.step1}`}>
            <div className={styles.fieldGroupName}>
                <p>Enter your address</p>
                <Tooltip text='Please provide us with the address of where the car will be located, additionally providing any details in the comments below with instruction, if applicable'>
                    <Image
                        src='/assets/images/icons/info.svg'
                        width={19}
                        height={19}
                        alt='Info'
                    />
                </Tooltip>
            </div>
            <div className={styles.fieldGroup}>
                <PlacesAutocomplete
                    labelField=''
                    required={true}
                    value={pickupAddress}
                    onSelect={handlePickupAddressSelect}
                />
            </div>
            <div className={`${styles.fieldGroup} ${styles.dropOffAddress}`}>
                <Checkbox
                    id='drop-off-address-checkbox'
                    name='drop-off-address-checkbox'
                    checked={isDropOffAddress}
                    text='If drop off address is different then pick up'
                    onChange={e => setIsDropOffAddress(e.target.checked)}
                />
            </div>
            {isDropOffAddress && (
                <div className={styles.fieldGroupName}>
                    <p>Enter your address</p>
                    <Tooltip text='Let us know if you would like us to return your car to a different address than pick-up. Our team will let you know if its possible and try our best to accommodate.'>
                        <Image
                            src='/assets/images/icons/info.svg'
                            width={19}
                            height={19}
                            alt='Info'
                        />
                    </Tooltip>
                </div>
            )}
            {isDropOffAddress && (
                <div className={styles.fieldGroup}>
                    <PlacesAutocomplete
                        labelField=''
                        required={true}
                        value={dropOffAddress}
                        onSelect={handleDropOffAddressSelect}
                    />
                </div>
            )}
            <div className={styles.fieldGroup}>
                <TextArea
                    placeholder='You can write your comment'
                    value={addressComment}
                    label={'Address comment'}
                    onChange={e => setAddressComment(e.target.value)}
                />
            </div>
            <div className={styles.buttonGroup}>
                <button
                    className={`${global.btn} ${global.btn__secondary}`}
                    type='button'
                    onClick={onNext}
                >
                    Next step
                </button>
            </div>
        </div>
    )
}

const FormStep2 = ({
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
    dropOffDate,
    setDropOffDate,
    dropOffTime,
    setDropOffTime,
    flexibleTime,
    setFlexibleTime,
    timeComment,
    setTimeComment,
    estimatedTime,
    onNext,
}) => {
    const handleChangeRadioBtn = event => {
        setFlexibleTime(event.target.value)
    }

    const isChecked = value => flexibleTime === value

    return (
        <div className={`${styles.stepForm} ${styles.step2}`}>
            <div className={styles.fieldGroupName}>
                <p>Desired pick up date and time</p>
                <Tooltip text='Let us know when you would like our concierge to pick-up your car. We will try our best to fulfil that; however, some flexibility is always appreciated.'>
                    <Image
                        src='/assets/images/icons/info.svg'
                        width={19}
                        height={19}
                        alt='Info'
                    />
                </Tooltip>
            </div>
            <div className={styles.fieldsRow}>
                <Input
                    label='Date'
                    type='date'
                    value={pickupDate}
                    onChange={e => setPickupDate(e.target.value)}
                    icon={
                        <Image
                            src='/assets/images/icons/calendar.svg'
                            width={27}
                            height={27}
                            alt='Calendar'
                        />
                    }
                    isRequired={true}
                />
                <Input
                    label='Time'
                    type='time'
                    value={pickupTime}
                    onChange={e => setPickupTime(e.target.value)}
                    icon={
                        <Image
                            src='/assets/images/icons/clock.svg'
                            width={27}
                            height={27}
                            alt='Clock'
                        />
                    }
                    isRequired={true}
                />
            </div>
            <div className={styles.fieldsRow}>
                <div className={styles.fieldsColumn}>
                    <p>Are you flexible on time?</p>
                    <div className={styles.radioButtonsGroup}>
                        <RadioButton
                            id='flexible-yes'
                            name='flexible'
                            value='Yes'
                            text='Yes'
                            onChange={handleChangeRadioBtn}
                            checked={isChecked('Yes')}
                        />
                        <RadioButton
                            id='flexible-no'
                            name='flexible'
                            value='No'
                            text='No'
                            onChange={handleChangeRadioBtn}
                            checked={isChecked('No')}
                        />
                    </div>
                </div>
            </div>
            <div className={`${styles.fieldsRow} ${styles.estimatedTime}`}>
                <div className={styles.fieldGroupName}>
                    <p>Estimated time of completion</p>
                    <Tooltip text='This is how long the selected service will take. Please keep in note this is just an estimated time, so our team will keep you updated on actual completion time'>
                        <Image
                            src='/assets/images/icons/info.svg'
                            width={19}
                            height={19}
                            alt='Info'
                        />
                    </Tooltip>
                </div>
                <Input
                    type='text'
                    readonly={true}
                    isRequired={false}
                    value={estimatedTime}
                />
            </div>
            <div className={styles.fieldsRow}>
                <div className={styles.fieldGroupName}>
                    <p>Desired drop off date and time</p>
                    <Tooltip text='Tooltip text for drop off date and time'>
                        <Image
                            src='/assets/images/icons/info.svg'
                            width={19}
                            height={19}
                            alt='Info'
                        />
                    </Tooltip>
                </div>
                <Input
                    label='Date'
                    type='date'
                    value={dropOffDate}
                    onChange={e => setDropOffDate(e.target.value)}
                    icon={
                        <Image
                            src='/assets/images/icons/calendar.svg'
                            width={27}
                            height={27}
                            alt='Calendar'
                        />
                    }
                    isRequired={true}
                />
                <Input
                    label='Time'
                    type='time'
                    value={dropOffTime}
                    onChange={e => setDropOffTime(e.target.value)}
                    icon={
                        <Image
                            src='/assets/images/icons/clock.svg'
                            width={27}
                            height={27}
                            alt='Clock'
                        />
                    }
                    isRequired={true}
                />
            </div>
            <div className={styles.fieldsRow}>
                <div className={styles.fieldGroup}>
                    <TextArea
                        placeholder='You can write your comment'
                        value={timeComment}
                        onChange={e => setTimeComment(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.buttonGroup}>
                <button
                    className={`${global.btn} ${global.btn__secondary}`}
                    type='button'
                    onClick={onNext}
                >
                    Next step
                </button>
            </div>
        </div>
    )
}

const FormStep3 = ({
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    onNext,
}) => {
    return (
        <div className={`${styles.stepForm} ${styles.step3}`}>
            <div className={styles.fieldGroupName}>
                <p>Your contact details</p>
                <Tooltip text='Providing us with your contact information will help us best know who to reach out to'>
                    <Image
                        src='/assets/images/icons/info.svg'
                        width={19}
                        height={19}
                        alt='Info'
                    />
                </Tooltip>
            </div>
            <div className={styles.fieldsRow}>
                <Input
                    className={styles.input}
                    label='First name'
                    type='text'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    isRequired={true}
                />
                <Input
                    className={styles.input}
                    label='Last name'
                    type='text'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    isRequired={true}
                />
            </div>
            <div className={styles.fieldsRow}>
                <Input
                    className={styles.input}
                    label='Phone number'
                    type='tel'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    isRequired={true}
                />
            </div>
            <div className={styles.fieldsRow}>
                <Input
                    label='Email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    isRequired={true}
                />
            </div>
            <div className={styles.buttonGroup}>
                <button
                    className={`${global.btn} ${global.btn__secondary}`}
                    type='button'
                    onClick={onNext}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

const BookingForm: React.FC = () => {
    const router = useRouter()
    const {
        addBookingOrder,
        isBookingOrderSubmitting,
        addBookingOrderError,
        addBookingOrderSuccess,
    } = useAddBookingOrder()

    const { selectedServices, removeService, selectedCar } = useStore(
        state => ({
            selectedServices: state.selectedServices,
            removeService: state.removeService,
            selectedCar: state.selectedCar,
        }),
    )

    useEffect(() => {
        if (!selectedServices || selectedServices.length < 1) {
            router.push(process.env.NEXT_PUBLIC_CATALOG_URL)
        }
    }, [selectedServices, router])

    // States for BookingForm
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const [selectedYear, setSelectedYear] = useState(
        selectedCar?.year.toString() || '',
    )
    const [isFormValid, setIsFormValid] = useState(false)
    const [formErrors, setFormErrors] = useState([])
    const [submitClicked, setSubmitClicked] = useState(false)

    const [selectedMake, setSelectedMake] = useState(selectedCar?.make || '')
    const [selectedModel, setSelectedModel] = useState(selectedCar?.model || '')
    const [promoCode, setPromoCode] = useState('')

    // States for FormStep1
    const [pickupLocation, setPickupLocation] = useState('')
    const [isDropOffAddress, setIsDropOffAddress] = useState(false)
    const [dropOffLocation, setDropOffLocation] = useState('')
    const [addressComment, setAddressComment] = useState('')

    // States for FormStep2
    const [pickupDate, setPickupDate] = useState('')
    const [pickupTime, setPickupTime] = useState('')
    const [dropOffDate, setDropOffDate] = useState('')
    const [dropOffTime, setDropOffTime] = useState('')
    const [flexibleOnTime, setFlexibleOnTime] = useState('Yes')
    const [timeComment, setTimeComment] = useState('')

    // States for FormStep3
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const { estimatedTime } = useGetEstimatedTime(selectedServices)
    const { estimatedPrice } = useGetEstimatedPrice(
        selectedServices,
        selectedCar?.size,
    )

    useEffect(() => {
        if (selectedCar) {
            setSelectedYear(selectedCar.year.toString())
            setSelectedMake(selectedCar.make)
            setSelectedModel(selectedCar.model)
        }
    }, [selectedCar])

    const handleDeleteService = (serviceId, serviceName) => {
        removeService(serviceId)
        toast.info(`${serviceName} removed from cart!`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const [expandedSteps, setExpandedSteps] = useState({
        step1: true,
        step2: false,
        step3: false,
    })
    const toggleStep = stepKey => {
        setExpandedSteps(prevState => ({
            ...prevState,
            [stepKey]: !prevState[stepKey],
        }))
    }

    const handleNextStep = (currentStepKey, nextStepKey) => {
        setExpandedSteps(prevState => ({
            ...prevState,
            [currentStepKey]: false,
            [nextStepKey]: true,
        }))
    }

    const validateForm = () => {
        const errors = []

        if (pickupLocation?.trim() === '') {
            errors.push('Pickup address is required.')
        }
        if (isDropOffAddress && dropOffLocation.trim() === '') {
            errors.push('Drop-off address is required.')
        }
        if (pickupDate.trim() === '') {
            errors.push('Pickup date is required.')
        }
        if (pickupTime.trim() === '') {
            errors.push('Pickup time is required.')
        }
        if (dropOffDate.trim() === '') {
            errors.push('Drop-off date is required.')
        }
        if (dropOffTime.trim() === '') {
            errors.push('Drop-off time is required.')
        }
        if (firstName.trim() === '') {
            errors.push('First name is required.')
        }
        if (lastName.trim() === '') {
            errors.push('Last name is required.')
        }
        if (phone.trim() === '') {
            errors.push('Phone number is required.')
        }
        if (email.trim() === '') {
            errors.push('Email is required.')
        }
        if (selectedServices.length === 0) {
            errors.push('At least one service is required.')
        }

        if (selectedCar === null) {
            errors.push('Car is required.')
        }

        if (!privacyPolicy) {
            errors.push('Privacy policy must be accepted.')
        }

        setIsFormValid(errors.length === 0)
        setFormErrors(errors)

        if (errors.length === 0 && submitClicked) {
            setSubmitClicked(false)
        }
    }

    useEffect(() => {
        validateForm()
    }, [
        pickupLocation,
        isDropOffAddress,
        dropOffLocation,
        pickupDate,
        pickupTime,
        dropOffDate,
        dropOffTime,
        firstName,
        lastName,
        phone,
        email,
        selectedServices,
        privacyPolicy,
        submitClicked,
    ])

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newOrder: Order = {
            status: OrderStatus.NewBooking,
            pipeline: OrderPipeline.Booking,
            carYear: parseInt(selectedYear),
            carMake: selectedMake,
            carModel: selectedModel,
            customer: {
                firstName,
                lastName,
                phone,
                email,
                location: pickupLocation,
            },
            services: selectedServices,
            customerComment:
                'Address comment: ' +
                addressComment +
                ' Time comment: ' +
                timeComment,
            flexibleOnTime: flexibleOnTime === 'Yes',
            pickupLocation: pickupLocation,
            dropOffLocation: dropOffLocation,
            pickupDate: new Date(`${pickupDate}T${pickupTime}`),
            dropOffDate: new Date(`${dropOffDate}T${dropOffTime}`),
            promoCode: promoCode,
        }

        try {
            const response = await addBookingOrder(newOrder)

            if (response.status === 200) {
                logInfo('Booking form submitted successfully')
                await router.push('/thankyou')
            } else {
                logError('Booking form submission failed:', response.statusText)
                await router.push('/error')
            }
        } catch (error) {
            logError('Booking form submitting form:', error)
        }
    }

    const isTabletOrMobile = useMediaQuery(960)

    return (
        <div className={styles.bookingForm}>
            <div className={styles.stepsFormWrapper}>
                <StepByStep
                    stepNum='1 Step'
                    title='Select location'
                    content={
                        <FormStep1
                            pickupAddress={pickupLocation}
                            setPickupAddress={setPickupLocation}
                            isDropOffAddress={isDropOffAddress}
                            setIsDropOffAddress={setIsDropOffAddress}
                            dropOffAddress={dropOffLocation}
                            setDropOffAddress={setDropOffLocation}
                            addressComment={addressComment}
                            setAddressComment={setAddressComment}
                            onNext={() => handleNextStep('step1', 'step2')}
                        />
                    }
                    active={expandedSteps.step1}
                    onToggle={() => toggleStep('step1')}
                />
                <StepByStep
                    stepNum='2 Step'
                    title='Pick date and time'
                    content={
                        <FormStep2
                            pickupDate={pickupDate}
                            setPickupDate={setPickupDate}
                            pickupTime={pickupTime}
                            setPickupTime={setPickupTime}
                            dropOffDate={dropOffDate}
                            setDropOffDate={setDropOffDate}
                            dropOffTime={dropOffTime}
                            setDropOffTime={setDropOffTime}
                            flexibleTime={flexibleOnTime}
                            setFlexibleTime={setFlexibleOnTime}
                            timeComment={timeComment}
                            setTimeComment={setTimeComment}
                            estimatedTime={estimatedTime}
                            onNext={() => handleNextStep('step2', 'step3')}
                        />
                    }
                    active={expandedSteps.step2}
                    onToggle={() => toggleStep('step2')}
                />
                <StepByStep
                    stepNum='3 Step'
                    title='Basic info and request'
                    content={
                        <FormStep3
                            firstName={firstName}
                            setFirstName={setFirstName}
                            lastName={lastName}
                            setLastName={setLastName}
                            phone={phone}
                            setPhone={setPhone}
                            email={email}
                            setEmail={setEmail}
                            onNext={() => handleNextStep('step3', 'step4')}
                        />
                    }
                    active={expandedSteps.step3}
                    onToggle={() => toggleStep('step3')}
                />

                {/*{ Confirm Request show only on mobile as last step }*/}
                {isTabletOrMobile && (
                    <section
                        className={`${global.section} ${styles.otherServicesBlock}`}
                    >
                        <RelatedServices />
                    </section>
                )}
                {isTabletOrMobile && (
                    <div className={styles.mobileSummaryBlock}>
                        <form method='POST' onSubmit={handleSubmit}>
                            <div className={styles.summaryBody}>
                                <span className={styles.confirmationLabel}>
                                    Confirm request
                                </span>
                                <div className={styles.additionally}>
                                    <p className={styles.infoText}>
                                        By proceeding with checkout, you agree
                                        to our terms and conditions. After
                                        completing your booking, our team will
                                        promptly reach out to confirm your
                                        requested service appointment. Thank you
                                        for choosing us to care for your
                                        vehicle; we look forward to providing
                                        exceptional service and exceeding your
                                        expectations
                                    </p>
                                </div>
                                <div className={styles.privacyPolicyWrapper}>
                                    <Checkbox
                                        id='privacy-policy'
                                        name='privacy-policy'
                                        value={privacyPolicy}
                                        text='I agree with terms and conditions'
                                        onChange={e =>
                                            setPrivacyPolicy(e.target.checked)
                                        }
                                        checked={privacyPolicy}
                                    />
                                </div>
                                {!isFormValid && (
                                    <button
                                        type='button'
                                        className={`${global.btn} ${global.btn__secondary__disabled}`}
                                        onClick={() => setSubmitClicked(true)}
                                    >
                                        Confirm request
                                    </button>
                                )}
                                {isFormValid && (
                                    <button
                                        type='submit'
                                        className={`${global.btn} ${global.btn__secondary}`}
                                    >
                                        Confirm request
                                    </button>
                                )}
                                <div className={styles.formErrorMessages}>
                                    {submitClicked &&
                                        formErrors.map((error, index) => (
                                            <p
                                                key={index}
                                                className={styles.errorMessage}
                                            >
                                                {error}
                                            </p>
                                        ))}
                                </div>
                            </div>
                            <div className={styles.background}></div>
                        </form>
                    </div>
                )}
            </div>
            <div className={styles.summaryBlock}>
                <form method='POST' onSubmit={handleSubmit}>
                    <div className={styles.totalContainer}>
                        <div className={styles.estPrice}>
                            <span className={styles.label}>
                                Estimated price
                            </span>
                            <span className={styles.sum}>
                                ${estimatedPrice}
                            </span>
                        </div>
                    </div>
                    <div className={styles.summaryBody}>
                        <div className={styles.promocodeContainer}>
                            <div className={styles.promocode}>
                                <span>Promo code</span>
                                <div className={styles.inputGroup}>
                                    <Input
                                        className={styles.input}
                                        type='text'
                                        isRequired={false}
                                        value={promoCode}
                                        onChange={e =>
                                            setPromoCode(e.target.value)
                                        }
                                    />
                                    <Image
                                        src='/assets/images/icons/trash.svg'
                                        width={25}
                                        height={25}
                                        alt='Delete'
                                    />
                                </div>
                            </div>
                            <p className={styles.infoText}>
                                Kindly note that the price provided is an
                                estimate and is subject to change based on
                                service type, add-ons, etc. Rest assured, we
                                will inform you of any price adjustments before
                                commencing the service, ensuring transparency
                                and satisfaction. Additionally, payment will
                                only be required upon completion of the service,
                                allowing you to review the results before
                                finalizing your payment
                            </p>
                        </div>
                        <div className={styles.summary}>
                            <span className={styles.subHeader}>
                                <h5>Summary</h5>
                            </span>
                            <ul>
                                <li>
                                    <span
                                        className={`${styles.thirdWidth} ${styles.name}`}
                                    >
                                        Vehicle make
                                    </span>
                                    <span
                                        className={`${styles.fullWidth} ${styles.value}`}
                                    >
                                        {selectedMake}
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className={`${styles.thirdWidth} ${styles.name}`}
                                    >
                                        Vehicle model
                                    </span>
                                    <span
                                        className={`${styles.fullWidth} ${styles.value}`}
                                    >
                                        {selectedModel}
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className={`${styles.thirdWidth} ${styles.name}`}
                                    >
                                        Vehicle year
                                    </span>
                                    <span
                                        className={`${styles.fullWidth} ${styles.value}`}
                                    >
                                        {selectedYear}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.services}>
                            <span className={styles.subHeader}>
                                <h5>Services</h5>
                                <hr />
                            </span>
                            <ol>
                                {selectedServices &&
                                    selectedServices.map(service => (
                                        <li key={service.id}>
                                            <div>
                                                <span
                                                    className={`${styles.fullWidth} ${styles.name}`}
                                                >
                                                    {service.name}
                                                </span>
                                                <span
                                                    className={`${styles.autoWidth} ${styles.value}`}
                                                >
                                                    <div
                                                        className={
                                                            styles.buttonGroup
                                                        }
                                                    >
                                                        <button
                                                            type='button'
                                                            onClick={() =>
                                                                handleDeleteService(
                                                                    service.id,
                                                                    service.name,
                                                                )
                                                            }
                                                        >
                                                            <Image
                                                                src='/assets/images/icons/trash.svg'
                                                                width={25}
                                                                height={25}
                                                                alt='Delete'
                                                            />
                                                        </button>
                                                    </div>
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                            </ol>
                        </div>
                        <div className={styles.additionally}>
                            <span className={styles.subHeader}>
                                <h5>Additionally</h5>
                                <hr />
                            </span>
                            <ul>
                                <li>
                                    <span
                                        className={`${styles.thirdWidth} ${styles.name}`}
                                    >
                                        Full address
                                    </span>
                                    <span
                                        className={`${styles.fullWidth} ${styles.value}`}
                                    >
                                        {pickupLocation}
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className={`${styles.thirdWidth} ${styles.name}`}
                                    >
                                        Date
                                    </span>
                                    <span
                                        className={`${styles.fullWidth} ${styles.value}`}
                                    >
                                        {pickupDate}
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className={`${styles.thirdWidth} ${styles.name}`}
                                    >
                                        Time
                                    </span>
                                    <span
                                        className={`${styles.fullWidth} ${styles.value}`}
                                    >
                                        {pickupTime}
                                    </span>
                                </li>
                            </ul>
                            {!isTabletOrMobile && (
                                <p className={styles.infoText}>
                                    By proceeding with checkout, you agree to
                                    our terms and conditions. After completing
                                    your booking, our team will promptly reach
                                    out to confirm your requested service
                                    appointment. Thank you for choosing us to
                                    care for your vehicle; we look forward to
                                    providing exceptional service and exceeding
                                    your expectations
                                </p>
                            )}
                        </div>
                        {!isTabletOrMobile && (
                            <div className={styles.privacyPolicyWrapper}>
                                <Checkbox
                                    id='privacy-policy'
                                    name='privacy-policy'
                                    value={privacyPolicy}
                                    text='I agree with terms and conditions'
                                    onChange={e =>
                                        setPrivacyPolicy(e.target.checked)
                                    }
                                    checked={privacyPolicy}
                                />
                            </div>
                        )}
                        {!isFormValid && !isTabletOrMobile && (
                            <button
                                type='button'
                                className={`${global.btn} ${global.btn__secondary__disabled}`}
                                onClick={() => setSubmitClicked(true)}
                            >
                                Confirm request
                            </button>
                        )}
                        {isFormValid && !isTabletOrMobile && (
                            <button
                                type='submit'
                                className={`${global.btn} ${global.btn__secondary}`}
                            >
                                Confirm request
                            </button>
                        )}
                        {!isTabletOrMobile && (
                            <div className={styles.formErrorMessages}>
                                {submitClicked &&
                                    formErrors.map((error, index) => (
                                        <p
                                            key={index}
                                            className={styles.errorMessage}
                                        >
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.background}></div>
                </form>
            </div>
        </div>
    )
}

export default BookingForm
