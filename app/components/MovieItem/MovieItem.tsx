import { Link } from "react-router";
import "./MovieItem.css";

function MovieItem({ movie }: any) {
    return (
        <article className="movie-card">
            <div className="movie-card__image-wrapper">
                <img className="movie-card__image" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-card__content">
                <h3 className="movie-card__title">{movie.title}</h3>
                <Link className="movie-card__link" to={`/movies/${movie.id}`}>Ver detalhes</Link>
            </div>
        </article>
    );
}

export default MovieItem;