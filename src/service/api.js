import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.4.1",
});

export default api;