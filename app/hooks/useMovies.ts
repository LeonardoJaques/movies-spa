import { useEffect, useState } from "react";
import { getMoviesById, getMoviesPopular } from "~/services/movies.services";

export function useMovies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getMoviesPopular()
            .then((response: any) => {
                setMovies(response.data.results);
                setLoading(false);
            })
            .catch((err: any) => {
                console.error("Erro ao carregar filmes:", err);
                setError("Não foi possível carregar os filmes populares.");
                setLoading(false);
            });
    }, []);

    return { movies, loading, error };
}

export function useMovieById(id: string) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getMoviesById(id)
            .then((response: any) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch((err: any) => {
                console.error("Erro ao carregar filme:", err);
                setError("Não foi possível carregar o filme.");
                setLoading(false);
            });
    }, [id]);

    return { movie, loading, error };
}