import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/images/Alloflix_logo.png";

export default function Navbar() {
  const [isMoviesDropdownVisible, setMoviesDropdownVisible] = useState(false);
  const [isArtistsDropdownVisible, setArtistsDropdownVisible] = useState(false);

  const handleMoviesMouseEnter = () => {
    setMoviesDropdownVisible(true);
  };

  const handleMoviesMouseLeave = () => {
    setMoviesDropdownVisible(false);
  };

  const handleArtistsMouseEnter = () => {
    setArtistsDropdownVisible(true);
  };

  const handleArtistsMouseLeave = () => {
    setArtistsDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Alloflix Logo" />
      </div>
      <div className="link-nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMoviesMouseEnter}
            onMouseLeave={handleMoviesMouseLeave}
          >
            <Link to="/movies">Films</Link>
            {isMoviesDropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/movies/populaires">Populaires</Link>
                </li>
                <li>
                  <Link to="/movies/dumoment">Du moment</Link>
                </li>
                <li>
                  <Link to="/movies/avenir">À venir</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleArtistsMouseEnter}
            onMouseLeave={handleArtistsMouseLeave}
          >
            <Link to="/artists">Artistes</Link>
            {isArtistsDropdownVisible && (
              <ul className="artists-dropdown-menu">
                <li>
                  <Link to="/artists/acteurs">Acteurs</Link>
                  <Link to="/artists/realisateurs">Réalisateurs</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="searchnav">
        <input
          type="text"
          placeholder="Rechercher un film..."
          className="input-navbar"
        />
      </div>
    </nav>
  );
}
