export type CarsListItem = {
    image: string
    subtitle: string
    startDate: string
    price: number
    benefits: Array<string>
    link: {
        label: string
        url: string
    }
}

const PROTECTION_CAR_LIST_ITEMS: CarsListItem[] = [
    {
        image: 'cars/car-demonstration-item-1.png',
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
        image: 'cars/car-demonstration-item-1.png',
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
        image: 'cars/car-demonstration-item-1.png',
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
        image: 'cars/car-demonstration-item-1.png',
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

export { PROTECTION_CAR_LIST_ITEMS }
