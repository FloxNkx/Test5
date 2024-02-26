import { useEffect } from 'react'

const ZohoChatWidget = (): JSX.Element | null => {
    useEffect(() => {
        const loadScript = (url: string, id: string): void => {
            const script = document.createElement('script')
            script.src = url
            script.id = id
            script.defer = true
            document.body.appendChild(script)
        }

        if (!document.getElementById('zsiqscript')) {
            loadScript('https://salesiq.zohopublic.com/widget', 'zsiqscript')
        }

        window.$zoho = window.$zoho || {}
        window.$zoho.salesiq = window.$zoho.salesiq || {
            widgetcode:
                'siq70c84fab6664c8efccb910f485d0657408e65ee1dc142a8011f1ec7cf9004e77',
            values: {},
            ready: function () {},
        }

        return () => {
            const script = document.getElementById('zsiqscript')
            if (script) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return null
}

export default ZohoChatWidget
