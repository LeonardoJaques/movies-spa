import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import { getMoviesPopular } from "~/services/movies.server";
import MovieItem from "~/components/MovieItem/MovieItem";
import "./Movies.css";

export function loader() {
    const moviesPromise = getMoviesPopular()
        .then((res: any) => res.data.results)
        .catch((err) => {
            console.error("Erro ao carregar filmes (Server):", err);
            return null;
        });

    return { moviesPromise };
}

function Movies() {
    const { moviesPromise } = useLoaderData<typeof loader>();

    return (
        <section className="movies">
            <h1 className="movies__title">Filmes Populares</h1>
            
            <Suspense fallback={<div className="movies__loading">Carregando filmes na velocidade da luz...</div>}>
                <Await resolve={moviesPromise}>
                    {(movies: any) => {
                        if (!movies) return <div className="movies__error">Não foi possível carregar os filmes populares.</div>;
                        if (movies.length === 0) return <div className="movies__empty">Nenhum filme encontrado</div>;

                        return (
                            <div className="movies__list">
                                {movies.map((movie: any) => (
                                    <MovieItem key={movie.id} movie={movie} />
                                ))}
                            </div>
                        );
                    }}
                </Await>
            </Suspense>
        </section>
    );
}

export default Movies;