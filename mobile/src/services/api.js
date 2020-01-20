import axios from 'axios';

const api = axios.create({
    baseURL: 'http://143.106.217.158:3333'
});

export default api;