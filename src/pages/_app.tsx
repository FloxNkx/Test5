import '@/assets/styles/antd.less'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'

import '@/assets/styles/style.less'
import React, { useState, useEffect } from 'react'
import ZohoChatWidget from '@/components/Chat/ZohoChatWidget'
import { ToastContainer } from 'react-toastify'
import * as fbq from '../utils/lib/fpixel'
import * as gtag from '../utils/lib/gtag'
import TagManager from 'react-gtm-module'
import { useRouter } from 'next/router'
import { GTagTracking, GTM } from '@/utils/lib/gtag'
import { FacebookPixel } from '@/utils/lib/fpixel'
import { MicrosoftTracking } from '@/utils/lib/microsoft'
import UTMSaver from '@/utils/lib/UTMSaver'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    useEffect(() => {
        TagManager.initialize({ gtmId: `${gtag.GTM_ID}` })
        fbq.pageview()

        const handleRouteChange = (url: URL) => {
            gtag.pageview(url)
            fbq.pageview()
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
    
    return (
        <ConfigProvider>
            <div>
                <UTMSaver />
                <GTM />
                <GTagTracking />
                <FacebookPixel />
                <MicrosoftTracking />
                <ZohoChatWidget />
                <ToastContainer />
                <Component {...pageProps} />
            </div>
        </ConfigProvider>
    )
}

export { App }
