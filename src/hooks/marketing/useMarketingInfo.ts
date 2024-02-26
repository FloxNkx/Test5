import { useEffect, useState } from 'react'
import { MarketingInfo } from '@/interfaces/MarketingInfo'

export const useMarketingInfo = () => {
    const [referrerURL, setReferrerURL] = useState<string | null>(null)
    const [sourceUrl, setSourceUrl] = useState<string | null>(null)

    useEffect(() => {
        const referrerURL = sessionStorage.getItem('referrerURL')
        if (referrerURL) {
            setReferrerURL(referrerURL)
        }

        const sourceUrl = sessionStorage.getItem('sourceUrl')
        if (sourceUrl) {
            setSourceUrl(sourceUrl)
        }
    }, [])

    const MarketingInfo: MarketingInfo = {
        referredUrl: referrerURL,
        sourceUrl: sourceUrl,
    }

    return MarketingInfo
}
