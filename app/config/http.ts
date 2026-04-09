import axios from "axios";

const moviesApis = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIES_API_KEY}`,
        'Content-Type': 'application/json'
    },
    params: {
        language: 'pt-BR'
    }
})

export default moviesApis