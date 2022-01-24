import axios from 'axios'
const Http = axios.create({
    baseUrl:event.process.REACT_APP_BASEURL,
});
export default Http;