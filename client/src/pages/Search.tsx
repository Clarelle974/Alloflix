import { useLoaderData, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

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

  return (
    <>
      <div className="search">
        <div>
          <img src="/src/assets/images/search-icon.png" alt="search" />
          <h2>{movie}</h2>
        </div>
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
