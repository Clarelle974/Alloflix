import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

interface PopularMoviesTypes {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function PopularMovie() {
  const data = useLoaderData() as PopularMoviesTypes[];
  console.info(data);
  return (
    <div>
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
