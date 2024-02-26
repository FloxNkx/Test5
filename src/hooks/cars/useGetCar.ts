import axios from 'axios'
import { useEffect, useState } from 'react'
import { logInfo, logError } from '@/services/Logger'
import { Car } from '@/interfaces/Car'

export const useGetCar = (selectedYear, selectedMake, selectedModel) => {
    const [selectedCar, setSelectedCar] = useState<Car | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCar = async () => {
            if (!selectedYear || !selectedMake || !selectedModel) {
                setSelectedCar(null)
                return
            }

            setLoading(true)
            logInfo(
                `Fetching car with Year: ${selectedYear}, Make: ${selectedMake}, Model: ${selectedModel} from API...`,
            )

            try {
                const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

                const response = await axios.get<Car>(
                    `${baseUrl}/api/v1/cars/${selectedYear}/${selectedMake}/${selectedModel}`,
                    {
                        params: {
                            year: selectedYear,
                            make: selectedMake,
                            model: selectedModel,
                        },
                    },
                )
                setSelectedCar(response.data)
                logInfo('Successfully fetched the car')
            } catch (error) {
                logError('Error fetching the car from API', error)
                setSelectedCar(null)
            } finally {
                setLoading(false)
            }
        }

        fetchCar()
    }, [selectedYear, selectedMake, selectedModel])

    return { selectedCar, loading }
}
