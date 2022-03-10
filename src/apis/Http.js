import BASE_URL from '../context/config';

import axios from 'axios';

const Http = axios.create({
  baseURL: 'http://ec2-3-18-215-242.us-east-2.compute.amazonaws.com/api',
});
export default Http;
