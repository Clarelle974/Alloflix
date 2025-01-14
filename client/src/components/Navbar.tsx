import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

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
    <nav>
      <div className="logo">
        <img
          src="https://cdn.discordapp.com/attachments/1324658166461370428/1326553270038171678/Alloflix_logo.png?ex=677fd881&is=677e8701&hm=ff1c4aa91b43bd28ac960affe08cebb6b4bceb9734328c214cdc948f0a7ff2e1&"
          alt="Alloflix Logo"
        />
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
        <input type="text" placeholder="Rechercher..." />
      </div>
    </nav>
  );
}
