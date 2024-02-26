import axios from 'axios'
import { useEffect, useState } from 'react'
import { logInfo, logError } from '@/services/Logger'
import { Category } from '@/interfaces/Category'

export const useGetCategoriesWithServices = (refreshCount: number) => {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true)
            logInfo('Fetching categories from API...')

            try {
                const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

                const response = await axios.get<Category[]>(
                    `${baseUrl}/api/v1/categories/with-services`,
                )
                setCategories(response.data)
                logInfo('Successfully fetched categories')
            } catch (error) {
                logError('Error fetching categories from API', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCategories()
    }, [refreshCount])

    return { categories, loading }
}
