import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Alloflix_logo.png";
import searchIcon from "../assets/images/search-icon.png";

export default function Navbar() {
  const [isMoviesDropdownVisible, setMoviesDropdownVisible] = useState(false);
  const [searchBarView, setSearchBarView] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState("");

  const navigate = useNavigate();

  const handleMoviesMouseEnter = () => {
    setMoviesDropdownVisible(true);
  };

  const handleMoviesMouseLeave = () => {
    setMoviesDropdownVisible(false);
  };

  const handleClickSearchIcon = () => {
    setSearchBarView(!searchBarView);
  };

  const handleChangeSearchBar = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedMovie(event.currentTarget.value);
  };

  const sendSearchedMovie = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/${searchedMovie}`);
  };

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <div className="logo">
          <img src={Logo} alt="Alloflix Logo" />
        </div>
      </Link>
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
            <Link to="/movies/top-rated">Films</Link>
            {isMoviesDropdownVisible && (
              <ul className="dropdown-menu">
                <li className="link link-1">
                  <Link to="/movies/toprated">Les mieux notés</Link>
                </li>
                <li className="link">
                  <Link to="/movies/popular">Populaires</Link>
                </li>
                <li className="link">
                  <Link to="/movies/now-playing">Du moment</Link>
                </li>
                <li className="link link-4">
                  <Link to="/movies/upcoming">À venir</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/artists/all">Artistes</Link>
          </li>
        </ul>
      </div>
      <form onSubmit={sendSearchedMovie} className="searchnav">
        <input
          type="text"
          placeholder="Rechercher un film..."
          className={searchBarView ? "" : "hide"}
          onChange={handleChangeSearchBar}
          value={searchedMovie}
        />
        <button type="button" onClick={handleClickSearchIcon}>
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </nav>
  );
}
