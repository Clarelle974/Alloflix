import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [searchedMovie, setSearchedMovie] = useState("");
  const navigate = useNavigate();
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
    <header className="header">
      <div className="header-container">
        <div className="input">
          <h1 className="main-title">Bienvenue sur Alloflix</h1>
          <form className="header-search" onSubmit={sendSearchedMovie}>
            <input
              type="search"
              placeholder="Rechercher un film ou un artiste..."
              onChange={handleChangeSearchBar}
              className="input-search"
              value={searchedMovie}
            />
            <button type="submit" className="btn-search">
              Recherche
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
