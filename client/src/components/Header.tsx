import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

interface HeaderProps {
  backgroundImg: string;
}

export default function Header({ backgroundImg }: HeaderProps) {
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
    <header
      style={{
        backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.7)), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backgroundImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="header"
    >
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
