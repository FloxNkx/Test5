import axios from 'axios'
import { useEffect, useState } from 'react'
import { logInfo, logError } from '@/services/Logger'
import { Service } from '@/interfaces/Service'

export const useGetRelatedServices = (selectedServices: Service[]) => {
    const [relatedServices, setRelatedServices] = useState<Service[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchRelatedServices = async () => {
            if (!selectedServices || selectedServices.length === 0) {
                setRelatedServices([])
                return
            }

            const serviceIds = selectedServices.map(service => service.id)

            setLoading(true)
            logInfo('Fetching related services from API...')

            try {
                const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

                const response = await axios.post<Service[]>(
                    `${baseUrl}/api/v1/services/related-services`,
                    serviceIds,
                )
                setRelatedServices(response.data)
                logInfo('Successfully fetched related services')
            } catch (error) {
                logError('Error fetching related services from API', error)
                setRelatedServices([])
            } finally {
                setLoading(false)
            }
        }

        fetchRelatedServices()
    }, [selectedServices])

    return { relatedServices, loading }
}
