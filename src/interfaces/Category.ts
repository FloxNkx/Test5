import { Service } from '@/interfaces/Service'

export interface Category {
    id: number
    name: string
    services?: Service[]
}
