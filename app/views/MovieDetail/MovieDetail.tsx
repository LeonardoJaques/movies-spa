import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import { getMoviesById } from "~/services/movies.server";
import "./MovieDetail.css";

export function loader({ params }: any) {
    const moviePromise = getMoviesById(params.id)
        .then((res: any) => res.data)
        .catch((err) => {
            console.error("Erro ao carregar filme (Server):", err);
            return null;
        });

    return { moviePromise };
}

function MovieDetail() {
    const { moviePromise } = useLoaderData<typeof loader>();

    return (
        <section className="movie-detail">
            <Suspense fallback={<div className="movie-detail__loading">Trazendo a sinopse do filme...</div>}>
                <Await resolve={moviePromise}>
                    {(movie: any) => {
                        if (!movie) return <div className="movie-detail__error">Não foi possível carregar o filme.</div>;

                        return (
                            <>
                                <div className="movie-detail__poster-wrapper">
                                    <img className="movie-detail__poster" src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`} alt={movie?.title} />
                                </div>
                                <div className="movie-detail__info">
                                    <h1 className="movie-detail__title">{movie?.title}</h1>
                                    <p className="movie-detail__overview">{movie?.overview}</p>
                                </div>
                            </>
                        );
                    }}
                </Await>
            </Suspense>
        </section>
    );
}

export default MovieDetail;