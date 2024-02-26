export type MainInformationType = {
    date?: string
    mainTitle: string
    mainImage: string
    articleTile: string
    articleDescs: Array<string>
    btn: {
        link: string
        label: string
    }
    images: Array<string>
}

const DEFAULT_IMAGES = [
    `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/detailing/photo-1.webp`,
    `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/detailing/photo-2.webp`,
    `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/detailing/photo-3.webp`,
]

const DETAILING_PAGE_MAIN_INFORMATION: MainInformationType = {
    mainTitle: 'Why Get your Car Detailed?',
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/detailing/Panamera.webp`,
    articleTile: 'Why Get your Car Detailed?',
    articleDescs: [
        `Welcome to Carrectly Auto Care, your top choice for exceptional detailing in Chicago. Our Showroom Detail, a favorite among our most valued customers, goes beyond the ordinary to amaze. Since 2015, our interior detailing expertise, armed with cutting-edge cleaners and extractors, ensures a level of cleanliness you didn't know was possible. For those prioritizing exterior brilliance, our exterior detail not only removes grime but adds gloss, eliminates scratches, and guards against future contamination. Trust us to elevate your vehicle's aesthetics, preserve its value, and provide an unparalleled driving experience. At Carrectly Auto Care, we don't just detail cars; we enhance and protect them for a journey that truly stands out.`,
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: DEFAULT_IMAGES,
}

const AESTHETIC_PAGE_MAIN_INFORMATION: MainInformationType = {
    mainTitle: 'WHY GET YOU Aesthetics?',
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/aesthetics/Description 2.webp`,
    articleTile: 'WHY GET YOU Aesthetics?',
    articleDescs: [
        `Step into the realm of automotive aesthetics at Carrectly Auto Care, where we redefine the beauty of your vehicle with precision and artistry. Our aesthetics services go beyond repairs, offering tailored solutions that enhance the visual allure of your car. From expert upholstery repairs to flooded car carpet restoration and flawless vinyl wraps, our certified technicians breathe new life into your vehicle's interiors and exteriors. Whether you seek a customized touch to reflect your unique style or comprehensive solutions to fix and elevate your car's appearance, Carrectly Auto Care is your trusted partner. Immerse yourself in the transformative experience of aesthetics services!`,
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: [],
}

const MOBILE_SERVICE_PAGE_MAIN_INFORMATION: MainInformationType = {
    mainTitle: 'WHY GET YOU Mobile Services?',
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/mobile-services/Description-car+2.webp`,
    articleTile: 'Why get you Aesthetics?',
    articleDescs: [
        'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus. Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus.',
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: [...DEFAULT_IMAGES, ...DEFAULT_IMAGES],
}

const OIL_CHANGE_PAGE_MAIN_INFORMATION: MainInformationType = {
    mainTitle: 'WHY GET YOU Oil Change?',
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/mobile-services/Description-car+2.webp`,
    articleTile: 'Why get you Oil Change??',
    articleDescs: [
        'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.',
        'Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet. Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus. Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque at tristique in at faucibus.',
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: [...DEFAULT_IMAGES, ...DEFAULT_IMAGES],
}

const PROTECTION_PAGE_MAIN_INFORMATION: MainInformationType = {
    mainTitle: 'Why get Paint Protection Film (PPF)?',
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/mobile-services/Description-car+2.webp`,
    articleTile: 'Why get you PPF?',
    articleDescs: [
        `In the world of automotive protection, Paint Protection Film (PPF) emerges as a crucial shield, providing your vehicle with an invisible armor against the rigors of the road. Carrectly Auto Care understands the significance of PPF in preserving your car's exterior beauty. This transparent and ultra-durable film acts as a barrier, safeguarding your vehicle's paintwork from stone chips, road debris, bug splatter, and other environmental elements.`,
        `With Carrectly Auto Care's expert PPF application, you not only invest in the longevity and resilience of your vehicle but also secure a shield that allows your car to shine for years to come. Embrace the importance of PPF with us – where protection meets perfection.`,
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: [],
}

const PROTECTION_PAGE_SECOND_MAIN_INFORMATION: MainInformationType = {
    mainTitle: null,
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/mobile-services/Description-car+2.webp`,
    articleTile: 'Why is Ceramic Coating Important?',
    articleDescs: [
        `Step into a realm of automotive excellence with Ceramic Coating services at Carrectly Auto Care. Our Ceramic Coating goes beyond aesthetics, providing a robust shield for your vehicle's exterior. This nanotechnology-infused layer forms a protective barrier, guarding against UV rays, oxidation, bird droppings, and environmental contaminants. `,
        `The hydrophobic properties of Ceramic Coating ensure water and contaminants bead off effortlessly, leaving your car cleaner for longer periods. Carrectly Auto Care invites you to experience the transformative power of Ceramic Coating – where each application is a promise of lasting brilliance and unparalleled protection for your car.`,
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: [],
}

const MECHANICAL_REPAIR_PAGE_MAIN_INFORMATION: MainInformationType = {
    mainTitle: 'Why Your Mechanical Repairs Important?',
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/mechanical/Mechanical-description.webp`,
    articleTile: 'Why Your Mechanical Repairs Important?',
    articleDescs: [
        `At Carrectly Auto Care, we redefine mechanical repairs with expertise and dedication. Our skilled technicians are committed to providing precision service, ensuring your vehicle runs at its best.`,
        `From routine maintenance to complex diagnostics, trust us to drive your confidence and keep your journey smooth. Schedule your mechanical repair with Chicago's trusted auto care experts today.`,
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: [],
}

const BODY_WORK_REPAIR_PAGE_MAIN_INFORMATION: MainInformationType = {
    mainTitle: 'Are You Ready to Restore your Car Back to Showroom Quality?',
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/mobile-services/Description-car+2.webp`,
    articleTile: 'Are You Ready to Restore your Car Back to Showroom Quality?',
    articleDescs: [
        `Discover the artistry of automotive perfection at Carrectly Auto Care, where precision meets passion in our body work services. As Chicago's trusted auto care experts, we redefine excellence in every dent, scratch, and restoration. Our professional technicians blend skill with attention to detail, ensuring your vehicle not only regains its pristine appearance but exceeds expectations.`,
        `From minor touch-ups to major collision repairs, Carrectly Auto Care is your dedicated partner in restoring your vehicle to its original splendor. Elevate your ride with our top-tier body work services – where craftsmanship meets care, and your car's body are meticulously rejuvenated.`,
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: [],
}

const TESLA_SERVICE_PAGE_MAIN_INFORMATION: MainInformationType = {
    mainTitle: 'WHY TESLAS MATTER TO US?',
    mainImage:
        `${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/tesla/description-tesla.webp`,
    articleTile: 'WHY TESLAS MATTER TO US?',
    articleDescs: [
        `Teslas have sky-rocketed in popularity over recent years, and anyone who frequents the streets of Chicago, Illinois and the surrounding areas can agree.At Carrectly Auto Care, we've redefined automotive excellence for Tesla owners. Step into a world where electric luxury meets meticulous care.`,
        `Whether you're seeking expert detailing, top-tier mechanical repairs, or specialized protection services for your Tesla, we've got you covered. Our skilled technicians are certified to handle the unique needs of electric vehicles, ensuring every service is a testament to precision and innovation.`,
    ],
    btn: {
        link: process.env.NEXT_PUBLIC_BOOK_URL,
        label: 'Book now',
    },
    images: [],
}

const STORAGE_TRANSPORT_CAR_PAGE_MAIN_INFORMATION: MainInformationType = {
    date: 'October 4, 2023',
    mainTitle: null,
    mainImage: `/images/cars/car-2.webp`,
    articleTile: 'Lorem ipsum dolor sit amet consectetur. ',
    articleDescs: [
        `Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque . Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque.`,
        `Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque . Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent. Fringilla diam vestibulum neque.`,
    ],
    btn: null,
    images: [],
}

export {
    MOBILE_SERVICE_PAGE_MAIN_INFORMATION,
    DETAILING_PAGE_MAIN_INFORMATION,
    OIL_CHANGE_PAGE_MAIN_INFORMATION,
    AESTHETIC_PAGE_MAIN_INFORMATION,
    PROTECTION_PAGE_MAIN_INFORMATION,
    PROTECTION_PAGE_SECOND_MAIN_INFORMATION,
    MECHANICAL_REPAIR_PAGE_MAIN_INFORMATION,
    BODY_WORK_REPAIR_PAGE_MAIN_INFORMATION,
    TESLA_SERVICE_PAGE_MAIN_INFORMATION,
    STORAGE_TRANSPORT_CAR_PAGE_MAIN_INFORMATION,
}
