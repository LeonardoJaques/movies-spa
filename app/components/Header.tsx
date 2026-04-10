import { Link } from "react-router";
import "./Header.css";

export function Header() {
    return (
        <header className="header">
            <h1 className="header__title">The Movies</h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <Link to="/" className="header__link">Início</Link>
                    </li>
                    <li className="header__item">
                        <Link to="/movies" className="header__link">Catálogo</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}