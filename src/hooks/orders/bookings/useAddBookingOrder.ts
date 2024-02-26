import axios from 'axios'
import { useState } from 'react'
import { Order } from '@/interfaces/Order'
import { logInfo, logError } from '@/services/Logger'
import { useMarketingInfo } from '@/hooks/marketing/useMarketingInfo'

export const useAddBookingOrder = () => {
    const [isBookingOrderSubmitting, setIsBookingOrderSubmitting] =
        useState(false)
    const [addBookingOrderError, setAddBookingOrderError] = useState(null)
    const [addBookingOrderSuccess, setAddBookingOrderSuccess] = useState(false)

    const marketingInfo = useMarketingInfo()

    const addBookingOrder = async (orderData: Order) => {
        setIsBookingOrderSubmitting(true)
        setAddBookingOrderError(null)
        setAddBookingOrderSuccess(false)

        try {
            logInfo('Adding new booking order with data:', orderData)

            const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_BOOKING_FUNCTION_URL

            const response = await axios.post(`${baseUrl}`, {
                orderData,
                marketingInfo,
            })

            logInfo('Successfully added new booking order')
            setAddBookingOrderSuccess(true)
            return response
        } catch (error: any) {
            const errorMsg =
                error.response?.data?.error || 'An unknown error occurred.'
            logError('Error in adding new booking order', error)
            setAddBookingOrderError(errorMsg)
        } finally {
            setIsBookingOrderSubmitting(false)
        }
    }

    return {
        addBookingOrder,
        isBookingOrderSubmitting,
        addBookingOrderError,
        addBookingOrderSuccess,
    }
}
