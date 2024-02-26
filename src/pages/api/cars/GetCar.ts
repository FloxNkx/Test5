import { NextApiRequest, NextApiResponse } from 'next'
import axios from '@/settings/axiosConfig'
import { logInfo, logError } from '@/services/Logger'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { year, make, model } = req.query
    logInfo(`SSR: API call to /api/v1/cars/${year}/${make}/${model}`)

    try {
        const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

        const response = await axios.get(
            `${baseUrl}/api/v1/cars/${year}/${make}/${model}`,
        )

        res.status(200).json(response.data)
        logInfo('SSR: Successfully returned car from /api/v1/cars')
    } catch (error) {
        logError('SSR: Error in /api/v1/cars API route', error)
        res.status(500).json({
            error: 'SSR: An error occurred while fetching the car.',
        })
    }
}
