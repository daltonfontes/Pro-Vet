import axios from 'axios';

const Api = axios.create({
    baseUrl: 'http://localhost:5001'
});

export default Api;