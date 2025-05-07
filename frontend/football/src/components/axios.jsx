import axios from 'axios';

const Axiosinstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',  // Ensure no trailing slash
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, 
});
export default Axiosinstance;