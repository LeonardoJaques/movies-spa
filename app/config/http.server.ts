import axios from "axios";

const API_KEY = process.env.MOVIES_API_KEY || process.env.VITE_MOVIES_API_KEY;

const moviesApis = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    },
    params: {
        language: 'pt-BR'
    }
})

export default moviesApis;