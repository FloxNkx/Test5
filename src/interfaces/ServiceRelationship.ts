import { Service } from '@/interfaces/Service'

export interface ServiceRelationship {
    serviceId: number
    relatedServiceId: number
    service?: Service | null
    relatedService?: Service | null
}
