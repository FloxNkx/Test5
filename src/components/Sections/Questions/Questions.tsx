import Link from 'next/link'
import * as React from 'react'
import { Collapse, Flex } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

export default function Questions() {
    const QUESTIONS_LIST = [
        {
            label: 'What services do you provide?',
            children: `Any kind of auto service, maintenance, or delivery: from
            an oil change, wash, or refuel to complex repairs that
            take a few days or more. We handle Round Trip services,
            One Way pick-ups and drop-offs, rental and loaner
            returns, and various custom requests.`,
        },
        {
            label: 'Who are concierges?',
            children: `Our professional concierges go through rigorous vetting,
            as well as background and driving record checks. Every
            driver is trained to provide exceptional customer
            service and be ready to ask the right questions at the
            shop or dealership.`,
        },
        {
            label: 'Is my car safe with Carrectly?',
            children: `That’s our top priority. All dealers, partner shops, and
            washes have garage liability and business auto policies
            while your car is serviced. While en route to and from
            the service, in addition to your own auto policy, we
            carry $1MM liability insurance so your car, you, and
            others are protected. You can have complete peace of
            mind from pickup to drop-off. Please note: Our concierge
            will ask for your insurance policy card as it is
            Illinois law to “always carry your insurance card in
            your vehicle and show it upon request by any law
            enforcement officer” (Illinois Secretary of State). More
            details here:
            https://www.cyberdriveillinois.com/departments/vehicles/mandatory_insurance.html`,
        },
        {
            label: 'Something is wrong with my car, can you fix it?',
            children: `Absolutely. In fact, majority of people don’t know what
            repairs are needed because there are so many things that
            can go wrong with most modern cars. Simply describe your
            problem and we will take your car to a professional
            technician for diagnostics, keep you informed of the
            causes, fixes, and costs, and bring it back to you when
            fixed.`,
        },
        {
            label: 'How does Carrectly work?',
            children: `(1) Select Round Trip service, One Way delivery, or a
            Fixed Price package and tell us what needs to be done.
            (2) Pick your preferred service center or let Carrectly
            choose a trusted partner. (3) We come to you, take your
            car for service, and keep you updated. (4) You only pay
            after the service is completed and your car is returned
            to you – wherever you are.`,
        },
        {
            label: 'Should I schedule ahead of time? If yes, how much?',
            children: `We pick up the car from you so you can schedule services
            whenever it is convenient. Quicker services, such as
            washes and oil changes, are available last minute,
            on-demand. However, for us to better plan the logistics
            and minimize the wait, we encourage you to schedule
            ahead of time, especially more time-consuming services.`,
        },
        {
            label: 'Can I change my pick-up/return time and/or location?',
            children: `Of course. Email or call us and we will update the
            details. Our email is info@carrectly.com`,
        },
        {
            label: 'How much do you charge for your pick up and return concierge service?',
            children: `All our services come with concierge free of charge, as
            long as its within the mile radius of our service
            facility. Typically we service cars within 7-10 miles of
            Chicago. If you live outside that, no worries, we will
            still be able to pick up your car; however, an
            additional logistical fee will be charged depending on
            distace.`,
        },
        {
            label: 'Will I get updated while you have my car?',
            children: `Yes, you are updated on the status and/or if there are
            any repair costs that need your approval.`,
        },
        {
            label: 'When and how do I pay?',
            children: `We value your trust and are very confident in the
            quality of the service we provide: you only pay when the
            service is completed. You will get an email with a
            receipt and payment information, which you can pay
            online. Moreover, our concierge will bring a Square app
            reader to the drop-off location, so you can pay with
            cash or any credit card then.`,
        },
        {
            label: 'Can I cancel my service request?',
            children: `Sure. Simply let us know at least 24 hours before your
            scheduled pick-up. There are no fees or penalties. If we
            have already dispatched a driver – then you only pay for
            his or her driving time – rarely more than $30.`,
        },
        {
            label: 'What if I am unhappy with the result?',
            children: `Oh no! Unexpected things happen – let us resolve them.
            Any potential issues or claims with a dealer, service
            provider, or Carrectly, must be submitted within a day
            after any service is completed. We will investigate all
            issues on your behalf and make things right`,
        },
    ]

    return (
        <div className='box-xl-spacing questions-section'>
            <div className='carrctl-block-title def-mb-36 md-mb-10'>
                Have a question? well, we’ve got answers
            </div>
            <Collapse
                bordered={false}
                accordion={true}
                expandIconPosition='end'
                expandIcon={props =>
                    props.isActive ? <MinusOutlined /> : <PlusOutlined />
                }
                items={QUESTIONS_LIST}
                className='default-collapse'
            />
            <Flex justify={'center'} className='def-mt-40'>
                <Link
                    href={process.env.NEXT_PUBLIC_BOOK_URL}
                    className='carrctl-btn carrctl-btn-secondary'
                >
                    Book now
                </Link>
            </Flex>
        </div>
    )
}

export { Questions }
