import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import "../styles/popularmovie.css";

interface PopularMoviesTypes {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function PopularMovie() {
  const data = useLoaderData() as PopularMoviesTypes[];

  return (
    <section>
      <h2 className="popular-movie-title">Films populaires</h2>
      <div className="container">
        <div className="all-cards">
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
