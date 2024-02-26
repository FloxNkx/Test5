import axios from 'axios'
import { useEffect, useState } from 'react'
import { logInfo, logError } from '@/services/Logger'
import { Car } from '@/interfaces/Car'

export const useGetCars = () => {
    const [cars, setCars] = useState<Car[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCars = async () => {
            setLoading(true)
            logInfo('Fetching cars from API...')

            try {
                const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

                const response = await axios.get<Car[]>(
                    `${baseUrl}/api/v1/cars`,
                )
                setCars(response.data)
                logInfo('Successfully fetched cars')
            } catch (error) {
                logError('Error fetching cars from API', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCars()
    }, [])

    return { cars, loading }
}
