import { Category } from '@/interfaces/Category'
import { ServiceImage } from '@/interfaces/ServiceImage'
import { ServiceRelationship } from '@/interfaces/ServiceRelationship'

export interface Service {
    id?: number | null
    name: string
    price: number
    priceSmallVehicle: number
    priceMediumVehicle: number
    priceLargeVehicle: number
    durationMin: number
    durationMax: number
    description?: string | null
    longDescription?: string | null
    details?: string | null
    priceCustomer?: Array<number> | null
    zohoId?: string | null
    active: boolean
    createdAt?: Date | null
    updatedAt?: Date | null
    images?: ServiceImage[] | null
    icon?: string | null
    categories?: Category[] | null
    relatedServices?: ServiceRelationship[] | null
}
