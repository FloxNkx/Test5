import axios from 'axios'
import { useEffect, useState } from 'react'
import { logInfo, logError } from '@/services/Logger'
import { Service } from '@/interfaces/Service'

export const useGetEstimatedPrice = (
    selectedServices: Service[],
    carSize: string,
) => {
    const [estimatedPrice, setEstimatedPrice] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEstimatedPrice = async () => {
            if (
                !selectedServices ||
                selectedServices.length === 0 ||
                !carSize
            ) {
                setEstimatedPrice(null)
                return
            }

            setLoading(true)
            logInfo('Fetching estimated price from API...')

            try {
                const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

                const response = await axios.post<string>(
                    `${baseUrl}/api/v1/services/estimated-price`,
                    {
                        selectedServices,
                        carSize,
                    },
                )
                setEstimatedPrice(response.data)
                logInfo('Successfully fetched estimated price')
            } catch (error) {
                logError('Error fetching estimated price from API', error)
                setEstimatedPrice(null)
            } finally {
                setLoading(false)
            }
        }

        fetchEstimatedPrice()
    }, [selectedServices, carSize])

    return { estimatedPrice, loading }
}
