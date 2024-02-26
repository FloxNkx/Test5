import { Order } from '@/interfaces/Order'
import { Car } from '@/interfaces/Car'

export interface Customer {
    id?: string
    phone: string
    email: string
    firstName: string
    lastName?: string
    location?: string
    orders?: Order[]
    cars?: Car[]
}
