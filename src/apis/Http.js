import BASE_URL from '../context/config'

import axios from 'axios'

const Http = axios.create({
    baseURL: BASE_URL,
});
export default Http;