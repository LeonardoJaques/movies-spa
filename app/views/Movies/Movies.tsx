import { useMovies } from "~/hooks/useMovies";
import styles from "../../components/MovieItem/Movies.module.css";
import MovieItem from "~/components/MovieItem/MovieItem";


function Movies() {
    const { movies, loading, error } = useMovies();

    if (loading) return <div>Carregando filmes...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className={styles.movies}>
            <h1>Filmes Populares</h1>
            <div className={styles.moviesList}>
                {movies.length === 0 && <div>Nenhum filme encontrado</div>}
                {movies.map((movie: any) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}

            </div>
        </section>
    );

}

export default Movies;