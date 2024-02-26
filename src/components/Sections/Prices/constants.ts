export type PricesItem = {
    subtitle: string
    startDate: string
    price: number
    benefits: Array<string>
    link: {
        label: string
        url: string
    }
}

const DETAILING_PRICES_ITEMS: PricesItem[] = [
    {
        subtitle: 'Showroom (Full Detail)',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'Interior',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'Exterior Detail',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'Showroom (Full Detail)',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
]

const MOBILE_SERVICE_PRICES_ITEMS: PricesItem[] = [
    {
        subtitle: 'Recall & Dealership Run',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'Battery Jump, Test & Swap',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'Flat Tire Swap',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'Recall & Dealership Run',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
]

const PROTECTION_SERVICE_PRICES_ITEMS: PricesItem[] = [
    {
        subtitle: 'BRONZE',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'SILVER',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'GOLD',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
    {
        subtitle: 'Recall & Dealership Run',
        startDate: 'starting at',
        price: 770,
        benefits: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
        ],
        link: {
            label: 'Learn more',
            url: process.env.NEXT_PUBLIC_MORE_URL,
        },
    },
]

export {
    DETAILING_PRICES_ITEMS,
    MOBILE_SERVICE_PRICES_ITEMS,
    PROTECTION_SERVICE_PRICES_ITEMS,
}
