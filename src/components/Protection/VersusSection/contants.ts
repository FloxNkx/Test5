export type VersusType = {
    title: string
    desc: string[]
}

const PROTECTION_PAGE_DATA: VersusType[] = [
    {
        title: 'CERAMIC COATING',
        desc: [
            `Applied as a liquid and bonds directly to the vehicle's paint surface`,
            `Enhances the depth and gloss of the paint, providing a sleek and glossy finish`,
            `Guards against UV rays, oxidation, bird droppings, tree sap, and other environmental contaminants`,
            'Creates a hydrophobic surface that repels water and makes cleaning easier',
            'Offers long-lasting protection but requires periodic reapplication',
        ],
    },
    {
        title: 'PPF',
        desc: [
            `Physical film applied to the vehicle's exterior, forming a protective layer`,
            `Maintains the original appearance of the vehicle while providing a clear protective layer`,
            `Acts as a robust shield against stone chips, road debris, bug splatter, and environmental elements`,
            `Preserves the car's paintwork, reducing the risk of scratches and swirl marks`,
            'Offers a durable, long-lasting protective layer that withstands harsh conditions',
        ],
    },
]

export { PROTECTION_PAGE_DATA }
