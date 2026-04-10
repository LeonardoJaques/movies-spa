import moviesApis from "../config/http.server";

function getMoviesPopular() {
    return moviesApis.get('discover/movie', {
        params: {
            sort_by: 'popularity.desc'
        }
    })
}

function getMoviesById(id: string) {
    return moviesApis.get(`/movie/${id}`)
}

export {
    getMoviesPopular,
    getMoviesById
}