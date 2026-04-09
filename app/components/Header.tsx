import { Link } from "react-router";

export function Header() {
    return <>
        <h1>Aplicativo de Filmes</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movie</Link>
                </li>
            </ul>
        </nav>
    </>
}