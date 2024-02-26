/** @type {import('next').NextConfig} */
const withLess = require('next-with-less')
const dotenv = require('dotenv')

dotenv.config()

const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        domains: [
            'carrectly.s3.amazonaws.com',
            'storage.googleapis.com',
            'prodcarrectlystorage.blob.core.windows.net',
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    compiler: {
        styledComponents: true,
        removeConsole: true,
    },
    trailingSlash: true,
    skipTrailingSlashRedirect: true,

    async rewrites() {
        return [
            {
                source: '/api/v1/:path*',
                destination: 'http://localhost:3000/:path*',
            },
        ]
    },
}

module.exports = withLess(nextConfig)
