// AxiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000', // Make sure this matches your backend port
  withCredentials: true,
});

export default axiosClient;
