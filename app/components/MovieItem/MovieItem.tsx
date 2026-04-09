import { Link } from "react-router";
import styles from "../MovieItem/Movies.module.css";
function MovieItem({ movie }: any) {
    return (
        <div className={styles.movieItem}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3 className={styles.title}>{movie.title}</h3>
            <p className={styles.details}><Link to={`/movies/${movie.id}`}>Ver detalhes</Link></p>
        </div>
    );
}

export default MovieItem;