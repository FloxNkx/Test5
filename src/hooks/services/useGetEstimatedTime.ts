import axios from 'axios'
import { useEffect, useState } from 'react'
import { logInfo, logError } from '@/services/Logger'
import { Service } from '@/interfaces/Service'

export const useGetEstimatedTime = (selectedServices: Service[]) => {
    const [estimatedTime, setEstimatedTime] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEstimatedTime = async () => {
            if (!selectedServices || selectedServices.length === 0) {
                setEstimatedTime(null)
                return
            }

            setLoading(true)
            logInfo('Fetching estimated time from API...')

            try {
                const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

                const response = await axios.post<string>(
                    `${baseUrl}/api/v1/services/estimated-time`,
                    {
                        selectedServices,
                    },
                )
                setEstimatedTime(response.data)
                logInfo('Successfully fetched estimated time')
            } catch (error) {
                logError('Error fetching estimated time from API', error)
                setEstimatedTime(null)
            } finally {
                setLoading(false)
            }
        }

        fetchEstimatedTime()
    }, [selectedServices])

    return { estimatedTime, loading }
}
