import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import "../styles/popularmovie.css";

export default function PopularMovie() {
  const { popular } = useLoaderData() as {
    popular: MovieTypes[];
  };

  return (
    <section>
      <h2 className="popular-movie-title">Films populaires</h2>
      <div className="container">
        <div className="all-cards">
          {popular.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
