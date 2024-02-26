export type CarsCardType = {
    title: string
    desc: string
    link: {
        url: string
        label: string
    }
    btn: {
        action: string
        label: string
    }
    image: string
    colWidth: number
}

const MECHANICAL_PAGE_CARD_ITEMS: CarsCardType[] = [
    {
        title: 'Problem Diagnsotics',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-1',
        colWidth: 12,
    },
    {
        title: 'AC Recharge/ Diagnsotics',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-2',
        colWidth: 12,
    },
    {
        title: 'Brake Pad Replacement',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-3',
        colWidth: 8,
    },
    {
        title: 'Regular Maintence',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-4',
        colWidth: 8,
    },
    {
        title: 'Oil Change',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-5',
        colWidth: 8,
    },
]

const BODY_WORK_PAGE_CARD_ITEMS: CarsCardType[] = [
    {
        title: 'Full Body Repair',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-1',
        colWidth: 8,
    },
    {
        title: 'Paintless Dent Removal',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-7',
        colWidth: 8,
    },
    {
        title: 'Glass Repair',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-4',
        colWidth: 8,
    },
    {
        title: 'Paint Chip Fix/ Touch UP',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-3',
        colWidth: 8,
    },
    {
        title: 'Panel Repaint',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-6',
        colWidth: 8,
    },
    {
        title: 'Wheel Restoration',
        desc: 'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        link: {
            url: process.env.NEXT_PUBLIC_MORE_URL,
            label: 'Learn more',
        },
        btn: {
            action: process.env.NEXT_PUBLIC_BOOK_URL,
            label: 'Book now',
        },
        image: 'cars/cards-car-5',
        colWidth: 8,
    },
]

export { MECHANICAL_PAGE_CARD_ITEMS, BODY_WORK_PAGE_CARD_ITEMS }
