import { NextApiRequest, NextApiResponse } from 'next'
import axios from '@/settings/axiosConfig'
import { logInfo, logError } from '@/services/Logger'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { id } = req.query

    logInfo(`SSR: API call to /api/GetService/${id}`)

    try {
        const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

        const response = await axios.get(`${baseUrl}/api/v1/services/${id}`)

        res.status(200).json(response.data)
        logInfo(
            `SSR: Successfully returned service with ID ${id} from /api/GetService`,
        )
    } catch (error) {
        logError(`SSR: Error in /api/GetService/${id} API route`, error)
        res.status(500).json({
            error: `SSR: An error occurred while fetching the service with ID ${id}.`,
        })
    }
}
