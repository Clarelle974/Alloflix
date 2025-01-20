import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import "../styles/search.css";

interface ResultsTypes {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function Search() {
  const { movie } = useParams();
  const results = useLoaderData() as ResultsTypes[];
  const backgroundImg = results[0].backdrop_path;
  return (
    <>
      <Header backgroundImg={backgroundImg} />
      <div className="search-results">
        <p>Résultats pour {movie}</p>
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
