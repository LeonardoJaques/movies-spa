import { useMovieById } from "~/hooks/useMovies";
import { useParams } from "react-router";
import styles from "./MovieDetail.module.css";

function MovieDetail() {

    const { id } = useParams();
    const { movie }: any = useMovieById(id || "");
    return (
        <section className={styles.movie}>
            <img src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`} alt={movie?.title} />
            <h1>{movie?.title}</h1>
            <p>{movie?.overview}</p>
        </section>
    );
}


export default MovieDetail;