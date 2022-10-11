import axios from 'axios';

export const Api = axios.create({
    baseURL: "http://localhost:8085/api",
    headers: { 'Content-Type': 'application/json' }
});