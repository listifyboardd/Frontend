import axios from 'axios';
import 'dotenv/config';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.BASE_URL,
});

export default axiosInstance;
