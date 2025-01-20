import { useState } from "react";
// import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "../styles/search.css";

interface ResultsTypes {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function Search() {
  const { movie } = useParams();
  const results = useLoaderData() as ResultsTypes[];
  const [searchedMovie, setSearchedMovie] = useState("");
  // const navigate = useNavigate();
  const handleChangeSearchBar = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedMovie(event.currentTarget.value);
  };
  // const sendSearchedMovie = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   navigate(`/search/${searchedMovie}`);
  // };
  // mettre un ecouteur touche entrée

  return (
    <>
      <div className="search">
        <div>
          <img src="/src/assets/images/search-icon.png" alt="search" />
          <input
            placeholder={movie}
            value={searchedMovie}
            onChange={handleChangeSearchBar}
          />
        </div>
        <div className="search-results">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
