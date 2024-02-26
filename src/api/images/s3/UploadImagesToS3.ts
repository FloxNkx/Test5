import { NextApiRequest, NextApiResponse } from 'next'
import AWS from 'aws-sdk'
import { logInfo, logError } from '@/services/Logger'

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' })
        }

        const images = req.body

        if (!Array.isArray(images) || images.length === 0) {
            return res.status(400).json({ message: 'No images provided' })
        }

        const bucketName = process.env.AWS_S3_BUCKET_NAME
        if (!bucketName) {
            return res
                .status(500)
                .json({ message: 'S3 bucket name is not configured' })
        }

        const uploadResults = await Promise.all(
            images.map(async ({ imageBase64, imageName }) => {
                if (!imageBase64 || !imageName) {
                    throw new Error('Missing data in one of the images')
                }

                const buffer = Buffer.from(imageBase64, 'base64')
                const uploadParams: AWS.S3.PutObjectRequest = {
                    Bucket: bucketName,
                    Key: `uploads/${imageName}`,
                    Body: buffer,
                    ContentType: 'image/jpeg',
                    ACL: 'public-read',
                }

                return s3.upload(uploadParams).promise()
            }),
        )

        logInfo('Images uploaded to S3', uploadResults)
        res.status(200).json({
            message: 'Upload successful',
            data: uploadResults,
        })
    } catch (error) {
        logError('Error uploading images', error)
    }
}
