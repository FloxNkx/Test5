import axios from 'axios'
import { useEffect, useState } from 'react'
import { Service } from '@/interfaces/Service'
import { logInfo, logError } from '@/services/Logger'

export const UseServices = () => {
    const [services, setServices] = useState<Service[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true)
            logInfo('Fetching services from API...')

            try {
                const response = await axios.get<Service[]>('/api/GetServices')
                setServices(response.data)
                logInfo('Successfully fetched services')
            } catch (error) {
                logError('Error fetching services from API', error)
            } finally {
                setLoading(false)
            }
        }

        fetchServices()
    }, [])

    return { services, loading }
}
