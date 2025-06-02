import { Link } from "react-router-dom";
import "../App.css";

export function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Vizinhança do jogo</h1>
            <ul className="navbar-links">
                <li>
                    <div className="hoverlink"><Link to="/" className="nav-link">Home</Link></div>
                </li>
                <li>
                    <div className="hoverlink"><Link to="/guilds" className="nav-link">Guildas</Link></div>
                </li>
                <li>
                    <div className="hoverlink"><Link to="/members" className="nav-link">Membros</Link></div>
                </li>
            </ul>
        </nav>
    );
}