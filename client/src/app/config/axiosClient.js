import axios from 'axios';
import { VITE_SERVER_URL } from '../config/env'

const axiosClient = axios.create({
    baseURL: `${VITE_SERVER_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosClient;
