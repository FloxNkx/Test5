import Script from 'next/script'

export const FB_PIXEL_ID = '265960684401321'

export const pageview = () => {
    window.fbq('track', 'PageView')
}

export const event = (name: string, options = {}) => {
    window.fbq('track', name, options)
}

export function FacebookPixel() {
    return (
        <>
            <Script
                strategy='afterInteractive'
                src={`https://connect.facebook.net/en_US/fbevents.js`}
            />
            <Script
                id='fbq-tracking-script'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
          `,
                }}
            />
        </>
    )
}
