import type { NextApiRequest, NextApiResponse } from 'next'
import { ServiceBusClient } from '@azure/service-bus'
import { logInfo, logError } from '@/services/Logger'

const connectionString = `${process.env.SERVICEBUS_CONNECTIONSTRING}`
const queueName = 'bookings-orders'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        try {
            const order = req.body

            const sbClient = new ServiceBusClient(connectionString)
            const sender = sbClient.createSender(queueName)

            logInfo('Sending booking order to Service Bus...')

            const message = {
                body: order,
            }

            await sender.sendMessages(message)
            await sender.close()

            res.status(200).json({
                success: true,
                message: 'Booking order sent to Service Bus.',
            })
            logInfo('Successfully sent booking order to Service Bus.')
        } catch (error) {
            logError('Failed to send booking order to Service Bus.', error)
            res.status(500).json({
                success: false,
                message: 'Failed to send booking order to Service Bus.',
                error,
            })
        }
    } else {
        res.status(405).json({
            success: false,
            message:
                'Method not allowed. Sending booking order to Service Bus failed',
        })
    }
}
