import axios from 'axios'
import { useEffect, useState } from 'react'
import { logInfo, logError } from '@/services/Logger'
import { Service } from '@/interfaces/Service'

export const useGetServices = (refreshCount: number) => {
    const [services, setServices] = useState<Service[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true)
            logInfo('Fetching services from API...')

            try {
                const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

                const response = await axios.get<Service[]>(
                    `${baseUrl}/api/v1/services/web`,
                )
                setServices(response.data)
                logInfo('Successfully fetched services')
            } catch (error) {
                logError('Error fetching services from API', error)
            } finally {
                setLoading(false)
            }
        }

        fetchServices()
    }, [refreshCount])

    return { services, loading }
}
