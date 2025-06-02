import { Link } from "react-router-dom";
import "../App.css";

export function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Vizinhança do jogo</h1>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/guilds" className="nav-link">Guildas</Link>
                </li>
                <li>
                    <Link to="/members" className="nav-link">Membros</Link>
                </li>
            </ul>
        </nav>
    );
}