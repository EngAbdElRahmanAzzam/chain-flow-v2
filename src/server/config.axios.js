//third-part
import axios from 'axios';

//client imports
import { LocalStorageAuth } from '../Shared/Utils/localStorageAuth';
import { API_HOST } from '.';


export const axiosInstance = axios.create({
    baseURL: API_HOST,
    withCredentials: true,
});

// Add token to headers if available
axiosInstance.interceptors.request.use((config) => {
    const token = LocalStorageAuth.getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

