import axios from 'axios';

const requester = axios.create({
    baseURL: 'http://localhost:8000',
});

export default requester;