import axios from 'axios';
import { toast } from 'react-toastify';



const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`, 
//   timeout: 10000, // Thiết lập thời gian chờ
//   headers: {
//     'Content-Type': 'application/json',
//   },
});


api.interceptors.request.use(
  (config) => {
    // Thêm token vào header nếu cần
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error)
    return Promise.reject(error);
  }
);

export default api;
