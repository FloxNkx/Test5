export type ContactItemType = {
    title: string
    icon: string
    desc: string[]
}

const ABOUT_US_CONTACT_ITEMS: ContactItemType[] = [
    {
        title: 'Address',
        icon: '/about-us/about-us-address',
        desc: [
            'We are on demand and can pick up your car from any location in Chicagoland area',
        ],
    },
    {
        title: 'Contact',
        icon: '/about-us/about-us-contact',
        desc: ['(773) 880-9085'],
    },
    {
        title: 'Business Hours',
        icon: '/about-us/about-us-business',
        desc: [
            'Mon - Sat: &nbsp;8:00 AM - 2:00 PM',
            'Sun: &emsp; &emsp;&emsp;Closed',
        ],
    },
]

export { ABOUT_US_CONTACT_ITEMS }
