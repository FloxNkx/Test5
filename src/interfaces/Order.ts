import { Service } from '@/interfaces/Service'
import { Car } from '@/interfaces/Car'
import { Customer } from '@/interfaces/Customer'
type Guid = string
export interface Order {
    id?: Guid
    zohoId?: string
    status: OrderStatus
    customerPrice?: number
    dealerPrice?: number
    discount?: number
    customerComment?: string
    pickupDate?: Date
    dropOffDate?: Date
    flexibleOnTime?: boolean
    pickupLocation?: string
    dropOffLocation?: string
    carYear: number
    carMake: string
    carModel?: string
    carColor?: string
    carVin?: string
    carTransmission?: string
    car?: Car
    promoCode?: string
    isInCalendar?: boolean
    customer: Customer
    services?: Service[]

    insurance?: string
    preferredContactMethod?: string
    images?: string[]
    pipeline: OrderPipeline
}

export enum OrderStatus {
    NewBooking,
    PartsAndVin,
    FollowedUp,
    TextBackToShopsConfirm,
    PlannedLogistic,
    TextBackToShopNoConfirm,
    TextCustomer,
    CallCustomer,
    EstimateEmailToCustomer,
    NoConfirm,
    ConfirmResponse,
    InProcess,
    InGarage,
    QualityCheck,
    ReadyToBeReturned,
    Returned,
    CustomerResponse,
    ShopsSendEstimate,
    GetEstimateFromShop,
    QuoteSentToACustomer,
    Invoiced,
    Paid,
    Completed,
    Postponed,
    Declined,
    NoStatus,
}

export enum OrderPipeline {
    Quote,
    Booking,
    Logistics,
    Accounting,
}
