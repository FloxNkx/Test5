import { useEffect } from 'react'

const UTMSaver: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search)
            const hasUTM = Array.from(urlParams.keys()).some(key =>
                key.startsWith('utm_'),
            )

            if (hasUTM) {
                // Save the full URL if UTM parameters are present
                const fullPath = window.location.href
                sessionStorage.setItem('referrerURL', fullPath)
            }

            // Save the document referrer (source URL)
            const sourceUrl = document.referrer
            if (sourceUrl) {
                sessionStorage.setItem('sourceUrl', sourceUrl)
            }
        }
    }, [])

    return null
}

export default UTMSaver
