import { NextApiRequest, NextApiResponse } from 'next'
import axios from '@/settings/axiosConfig'
import { logInfo, logError } from '@/services/Logger'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    logInfo('API call to /api/GetServices')

    try {
        if (req.method !== 'GET') {
            throw new Error('Only GET method is supported.')
        }

        const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL
        if (!baseUrl) {
            throw new Error(
                'NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL environment variable is not defined.',
            )
        }

        const response = await axios.get(`${baseUrl}/api/v1/services`)

        res.status(200).json(response.data)
        logInfo('Successfully returned services from /api/getServices')
    } catch (error) {
        logError('Error in /api/getServices API route', error)
        res.status(500).json({
            error: 'An error occurred while fetching services.',
        })
    }
}
