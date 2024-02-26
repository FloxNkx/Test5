import axios from 'axios'

// If in development mode, set Axios to bypass self-signed certificate verification
if (process.env.NODE_ENV === 'development') {
    const https = require('https')
    axios.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    })
}

export default axios
