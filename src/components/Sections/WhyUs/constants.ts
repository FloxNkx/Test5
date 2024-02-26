export type FeaturesItemType = {
    imgUrl: string
    title: string
    desc: string
}

const MAIN_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'features-3',
        title: 'TRUST & SAFETY',
        desc: `Choose Carrectly Auto Care for trusted and highly-rated
            auto care in Chicago. Our rigorously trained concierges
            prioritize your safety, and your car is insured during
            service.`,
    },
    {
        imgUrl: 'features-2',
        title: 'CONVENIENCE',
        desc: `Experience hassle-free auto care at Chicago’s Best Auto
            Care Experts. Say goodbye to long waits and schedule
            juggling—our service is designed to be quick, efficient,
            and tailored to your convenience.`,
    },
    {
        imgUrl: 'features-1',
        title: 'STAY UPDATED, PAY AFTER',
        desc: `Stay informed with Carrectly Auto Care. Receive expert
            advice, regular updates on progress and pricing, and approve
            repairs before work begins. You pay only after the service
            is completed to your satisfaction.`,
    },
]

const DETAILING_PAGE_FEATURES_LIST = [
    {
        imgUrl: '/detailing/detailing-features-3',
        title: 'We work around your schedule',
        desc: `At Carrectly Auto Care, we prioritize your convenience. Our detailing services revolve around your schedule, ensuring a hassle-free experience. Book with us, and we'll bring our concierge to pick up your car and provide top-quality car care at a time that suits you best`,
    },
    {
        imgUrl: '/detailing/detailing-features-2',
        title: 'Top Experts, Premium Products',
        desc: `Experience the pinnacle of detailing with us. Our team comprises top-notch experts armed with the finest products. We don't just detail; we craft automotive perfection, leaving your vehicle with a pristine, long-lasting finish that will make your stand out in Chicago.`,
    },
    {
        imgUrl: '/detailing/detailing-features-1',
        title: 'Cost-Efficient',
        desc: `Discover cost-efficient detailing without compromising on excellence. We believe in providing top-quality services at competitive prices. Enjoy the luxury of a professionally detailed car and paying AFTER the service is completed.`,
    },
]

const MOBILE_SERVICE_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'features-3',
        title: 'TRUST & SAFETY',
        desc: `All shops are trusted, highly rated, and loved by Chicagoans. Our concierges go through rigorous training and your car is insured while we service it.`,
    },
    {
        imgUrl: 'features-2',
        title: 'CONVENIENCE',
        desc: `Gone are the days of long lines and spending hours at service centers. Don’t juggle your schedule around maintenance appointments.`,
    },
    {
        imgUrl: 'features-1',
        title: 'STAY UPDATED, PAY AFTER',
        desc: `We give you an expert advice and keep you updated on the price and status. We ask for approval on all repairs needed and you only pay when the service is completed.`,
    },
]

const OIL_CHANGE_SERVICE_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'features-3',
        title: 'TRUST & SAFETY',
        desc: `All shops are trusted, highly rated, and loved by Chicagoans. Our concierges go through rigorous training and your car is insured while we service it.`,
    },
    {
        imgUrl: 'features-2',
        title: 'CONVENIENCE',
        desc: `Gone are the days of long lines and spending hours at service centers. Don’t juggle your schedule around maintenance appointments.`,
    },
    {
        imgUrl: 'features-1',
        title: 'STAY UPDATED, PAY AFTER',
        desc: `We give you an expert advice and keep you updated on the price and status. We ask for approval on all repairs needed and you only pay when the service is completed.`,
    },
]

const QUOTE_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'features-3',
        title: 'TRUST & SAFETY',
        desc: `All shops are trusted, highly rated, and loved by Chicagoans. Our concierges go through rigorous training and your car is insured while we service it.`,
    },
    {
        imgUrl: 'features-2',
        title: 'CONVENIENCE',
        desc: `Gone are the days of long lines and spending hours at service centers. Don’t juggle your schedule around maintenance appointments.`,
    },
    {
        imgUrl: 'features-1',
        title: 'STAY UPDATED, PAY AFTER',
        desc: `We give you an expert advice and keep you updated on the price and status. We ask for approval on all repairs needed and you only pay when the service is completed.`,
    },
]

const AESTHETIC_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'aesthetic/aesthetic-features-1',
        title: 'Customer Transparency',
        desc: `We prioritize transparency and honesty in our services, offering straightforward pricing and clear communication throughout the process. Enjoy peace of mind, knowing that your vehicle is in the hands of professionals.`,
    },
    {
        imgUrl: 'aesthetic/aesthetic-features-2',
        title: 'Comprehensive Care',
        desc: `Elevate your automotive experience with Carrectly Auto Care – your one-stop solution for all your car care needs. Anything and everything you may need, we offer a comprehensive range of solutions under one roof. Simplify your car care journey with our diverse and top-quality services. `,
    },
    {
        imgUrl: 'aesthetic/aesthetic-features-3',
        title: '5 - Star Quality and Trust',
        desc: `Our profesional technicians bring a wealth of knowledge and skill, ensuring top-tier service for your vehicle. Trust in our expertise to delive precision and excellence with every repair, detailing, or protection service.`,
    },
]

const PROTECTION_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'aesthetic/aesthetic-features-1',
        title: 'Certified Installers',
        desc: `As certified installers, we exclusively use Professional Grade PPF and Ceramic coatings from top brands like Ceramic Pro, 3M, and XPEL. Trust our expertise to shield your vehicle with the highest quality protective solutions.`,
    },
    {
        imgUrl: 'aesthetic/aesthetic-features-2',
        title: 'Trusted by Leading Brands',
        desc: `We work on ALL vehicles, providing meticulous care and safeguarding your investment with precision and excellence. Choose transparency and quality where you can easily explore our services or request a callback to discover our straightforward, competitive prices.`,
    },
    {
        imgUrl: 'aesthetic/aesthetic-features-3',
        title: 'Extended Warranty',
        desc: `Our protection services come with an extended warranty, ensuring you can enjoy your vehicle without worries. In the rare event of a defect, simply reach out, and we'll take care of it, providing you with peace of mind and uncompromised protection.`,
    },
]

const MECHANICAL_REPAIR_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'aesthetic/aesthetic-features-1',
        title: 'One stop shop',
        desc: `Get everything done in one place, on-demand, with free pick-up and return anywhere in Chicago. Our accommodating and reliable experts are here to solve it all, making your car care experience seamless`,
    },
    {
        imgUrl: 'aesthetic/aesthetic-features-2',
        title: 'Warranty protected',
        desc: `Drive with peace of mind knowing that at Carrectly Auto Care, every service is backed by our unwavering commitment to quality. We stand by our work, thoroughly double-checking each service to ensure it meets our stringent standards. In the rare event of any issues, rest assured you can count on us for assistance.`,
    },
    {
        imgUrl: 'aesthetic/aesthetic-features-3',
        title: 'Top Quality',
        desc: `Trust the Carrectly Auto Care team, a group of knowledgeable, and detail-oriented experts who take pride in their work. From the simplest maintenance tasks to intricate repairs, we approach each job with precision, expertise, and an unwavering commitment to detail.`,
    },
]

const TESLA_SERVICE_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'features-3',
        title: 'Electric Expertise',
        desc: `Choose Carrectly Auto Care for your Tesla, where our professional technicians possess electric-centric expertise. We understand the unique needs of electric vehicles, ensuring precision in every service.`,
    },
    {
        imgUrl: 'features-2',
        title: 'Tailored Tesla Services',
        desc: `Elevate your Tesla experience with Carrectly Auto Care's tailored services. All of our services are designed specifically for Tesla vehicles. Experience care that goes beyond the ordinary, ensuring your electric luxury receives the attention it deserves.`,
    },
    {
        imgUrl: 'features-1',
        title: 'Seamless Concierge Experience',
        desc: `Enjoy a seamless concierge experience that complements the luxury of your Tesla. We prioritize your convenience, offering complimentary pick-up and return services. From scheduling to payment after services, experience a hassle-free journey that reflects the elegance and efficiency of your Tesla.`,
    },
]

const BODY_WORK_REPAIR_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'aesthetic/aesthetic-features-1',
        title: 'One stop shop',
        desc: `From dent repairs to complete restorations, our skilled technicians handle every aspect of your vehicle's aesthetics under one roof. Streamline your car care journey with us, ensuring a hassle-free experience and leaving your vehicle looking its absolute best`,
    },
    {
        imgUrl: 'aesthetic/aesthetic-features-2',
        title: 'Warranty protected',
        desc: `Our body work services come with warranty protection, providing you with peace of mind. We stand by our work, ensuring that any issues are promptly addressed. Choose body work that not only restores your vehicle's beauty but also comes with the assurance of lasting quality.`,
    },
    {
        imgUrl: 'aesthetic/aesthetic-features-3',
        title: '5 - Star Top-Quality',
        desc: `Our dedicated team of certified technicians takes pride in delivering top-quality body work services. We approach each task with attention to detail and a commitment to excellence.`,
    },
]

const STORAGE_TRANSPORT_PAGE_FEATURES_LIST = [
    {
        imgUrl: 'features-3',
        title: 'TRUST & SAFETY',
        desc: `All shops are trusted, highly rated, and loved by Chicagoans. Our concierges go through rigorous training and your car is insured while we service it.`,
    },
    {
        imgUrl: 'features-2',
        title: 'CONVENIENCE',
        desc: `Gone are the days of long lines and spending hours at service centers. Don’t juggle your schedule around maintenance appointments.`,
    },
    {
        imgUrl: 'features-1',
        title: 'STAY UPDATED, PAY AFTER',
        desc: `We give you an expert advice and keep you updated on the price and status. We ask for approval on all repairs needed and you only pay when the service is completed.`,
    },
]

export {
    MAIN_PAGE_FEATURES_LIST,
    DETAILING_PAGE_FEATURES_LIST,
    MOBILE_SERVICE_PAGE_FEATURES_LIST,
    OIL_CHANGE_SERVICE_PAGE_FEATURES_LIST,
    AESTHETIC_PAGE_FEATURES_LIST,
    QUOTE_PAGE_FEATURES_LIST,
    PROTECTION_PAGE_FEATURES_LIST,
    MECHANICAL_REPAIR_PAGE_FEATURES_LIST,
    BODY_WORK_REPAIR_PAGE_FEATURES_LIST,
    TESLA_SERVICE_PAGE_FEATURES_LIST,
    STORAGE_TRANSPORT_PAGE_FEATURES_LIST,
}
