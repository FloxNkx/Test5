import Script from 'next/script'

export const GA_TRACKING_ID = 'UA-81619405-1'
export const GA_ADS_ID = 'AW-877045767'
export const GTM_ID = 'GTM-NS3VKW9'

export const pageview = (url: URL) => {
    window.gtag('config', `${GA_TRACKING_ID}`, {
        page_path: url,
    })
}

export const pageviewAds = (url: string) => {
    window.gtag('config', `${GA_ADS_ID}`, {
        page_path: url,
    })
}

type GTagEvent = {
    action: string
    value?: number
    currency?: string
    send_to?: string
}

export const event = ({ action, send_to, value, currency }: GTagEvent) => {
    window.gtag('event', action, {
        send_to: send_to,
        value: value,
        currency: currency,
    })
}

export function GTM() {
    return (
        <Script
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
    )
}

export function GTagTracking() {
    return (
        <Script
            id='gtag-tracking-script'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            gtag('config', '${GA_ADS_ID}');
          `,
            }}
        />
    )
}
