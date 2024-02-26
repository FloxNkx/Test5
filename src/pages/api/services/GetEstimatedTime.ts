﻿import { NextApiRequest, NextApiResponse } from 'next'
import axios from '@/settings/axiosConfig'
import { logInfo, logError } from '@/services/Logger'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        return
    }

    const { selectedServices } = req.body

    if (!selectedServices || selectedServices.length === 0) {
        res.status(400).json({ error: 'No services provided.' })
        return
    }

    logInfo('SSR: API call to /api/GetEstimatedTime')

    try {
        const baseUrl = process.env.NEXT_PUBLIC_CARRECTLY_ADMIN_BACKEND_URL

        const response = await axios.post(
            `${baseUrl}/api/v1/services/estimated-time`,
            {
                selectedServices,
            },
        )

        res.status(200).json(response.data)
        logInfo(
            'SSR: Successfully returned estimated time from /api/GetEstimatedTime',
        )
    } catch (error) {
        logError('SSR: Error in /api/GetEstimatedTime API route', error)
        res.status(500).json({
            error: 'SSR: An error occurred while fetching estimated time.',
        })
    }
}
