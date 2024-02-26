import axios from 'axios'
import { useState } from 'react'
import { Order } from '@/interfaces/Order'
import { logError, logInfo } from '@/services/Logger'
import { useMarketingInfo } from '@/hooks/marketing/useMarketingInfo'

export const useAddQuoteOrder = () => {
    const [isQuoteOrderSubmitting, setIsQuoteOrderSubmitting] = useState(false)
    const [addQuoteOrderError, setAddQuoteOrderError] = useState(null)
    const [addQuoteOrderSuccess, setAddQuoteOrderSuccess] = useState(false)

    const marketingInfo = useMarketingInfo()

    const addQuoteOrder = async (orderData: Order) => {
        setIsQuoteOrderSubmitting(true)
        setAddQuoteOrderError(null)
        setAddQuoteOrderSuccess(false)

        try {
            logInfo('Adding new quote order with data:', orderData)

            const guidIdGenerated = generateGuid()
            orderData.id = guidIdGenerated

            const uploadedImages = await UploadImages(
                orderData.images,
                guidIdGenerated,
            )
            if (uploadedImages) {
                orderData.images = uploadedImages
            } else {
                logInfo('Proceeding without images due to upload failure.')
                orderData.images = []
            }

            const quoteUrl = process.env.NEXT_PUBLIC_CARRECTLY_QUOTE_FUNCTION_URL
            const response = await axios.post(quoteUrl, {
                orderData,
                marketingInfo,
            })

            logInfo('Successfully added new quote order')
            setAddQuoteOrderSuccess(true)
            return response.data
        } catch (error) {
            const errorMsg =
                error.response?.data?.error || 'An unknown error occurred.'
            logError('Error in adding new order', error)
            setAddQuoteOrderError(errorMsg)
        } finally {
            setIsQuoteOrderSubmitting(false)
        }
    }

    return {
        addQuoteOrder,
        isQuoteOrderSubmitting,
        addQuoteOrderError,
        addQuoteOrderSuccess,
    }
}

function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8
            return v.toString(16)
        },
    )
}

async function UploadImages(images, guidIdGenerated) {
    if (!images || images.length === 0) return null

    const uploadImagesUrl = process.env.NEXT_PUBLIC_CARRECTLY_UPLOAD_IMAGES_FUNCTION_URL
    const requestBody = {
        path: `orders/${guidIdGenerated}`,
        base64Images: images,
    }
    try {
        const response = await axios.post(uploadImagesUrl, requestBody)
        logInfo('Successfully uploaded photos')
        return response.data
    } catch (error) {
        logError('Error in uploading photos', error)
        return null
    }
}
