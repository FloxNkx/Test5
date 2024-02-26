import React from 'react'
import Script from 'next/script'

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

const source = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&language=en`

const GooglePlacesScript = () => {
    return <Script type='text/javascript' src={source} strategy='lazyOnload' />
}

export default GooglePlacesScript
