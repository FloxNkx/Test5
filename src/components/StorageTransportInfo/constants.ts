export type STORAGE_INFO_ITEM_CAR = {
    title: string
    icon?: string
    isTitle?: boolean
}

export type STORAGE_INFO_CAR = {
    colWidth: number
    items?: STORAGE_INFO_ITEM_CAR[]
}

const STORAGE_INFO_LIST: STORAGE_INFO_CAR[] = [
    {
        colWidth: 6,
        items: [
            {
                title: 'Purpose',
            },
            {
                title: 'Location',
            },
            {
                title: 'Security',
            },
            {
                title: 'Access to Vehicle',
            },
        ],
    },
    {
        colWidth: 9,
        items: [
            {
                isTitle: true,
                title: 'Car Storage',
            },
            {
                icon: 'flag',
                title: 'Provides a secure location for long-term or short-term storage of vehicles.',
            },
            {
                icon: 'location',
                title: 'Involves keeping the vehicle at a designated storage facility or enclosed space.',
            },
            {
                icon: 'shield',
                title: 'Often includes secure, monitored facilities with features like alarms and surveillance.',
            },
            {
                icon: 'key',
                title: 'Allows owners to access their vehicle during storage hours.',
            },
        ],
    },
    {
        colWidth: 9,
        items: [
            {
                isTitle: true,
                title: 'Car Transport',
            },
            {
                icon: 'flag',
                title: 'Involves moving vehicles from one location to another, often over a long distance.',
            },
            {
                icon: 'location',
                title: 'Vehicle is loaded onto a transport carrier (e.g., trailer, flatbed) for transportation.',
            },
            {
                icon: 'shield',
                title: 'Focuses on secure loading, transport, and unloading of the vehicle to prevent damage or theft.',
            },
            {
                icon: 'key',
                title: 'Access may be restricted during transport, depending on the method used.',
            },
        ],
    },
]

export { STORAGE_INFO_LIST }
