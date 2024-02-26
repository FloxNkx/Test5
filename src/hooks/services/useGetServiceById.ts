import axios from 'axios'
import { Service } from '@/interfaces/Service'
import { logInfo, logError } from '@/services/Logger'
import { useCallback, useEffect, useState } from 'react'

export const useGetServiceById = (serviceId: number, carSize?: string) => {
    const [getService, setService] = useState<Service | null>(null)
    const [getServiceLoading, setLoading] = useState(false)

    const fetchService = useCallback(async () => {
        if (!serviceId) return

        setLoading(true)
        logInfo(
            `Fetching service with ID ${serviceId} and CarSize: ${carSize} from API...`,
        )

        try {
            const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

            const response = await axios.get<Service>(
                `${baseUrl}/api/v1/services/${serviceId}`,
            )

            let serviceData = response.data

            if (carSize) {
                switch (carSize.toLowerCase()) {
                    case 'small':
                        serviceData.price =
                            serviceData.priceSmallVehicle || serviceData.price
                        break
                    case 'medium':
                        serviceData.price =
                            serviceData.priceMediumVehicle || serviceData.price
                        break
                    case 'large':
                        serviceData.price =
                            serviceData.priceLargeVehicle || serviceData.price
                        break
                    default:
                        serviceData.price
                        break
                }
            }

            setService(serviceData)
            logInfo(
                `Successfully fetched service with ID ${serviceId} and CarSize: ${carSize}`,
            )
        } catch (error) {
            logError(
                `Error fetching service with ID ${serviceId} and CarSize: ${carSize} from API`,
                error,
            )
            setService(null)
        } finally {
            setLoading(false)
        }
    }, [serviceId, carSize])

    useEffect(() => {
        fetchService()
    }, [fetchService])

    return { getService, getServiceLoading, refetchService: fetchService }
}
