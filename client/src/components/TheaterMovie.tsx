import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function TheaterMovie() {
  const { theater } = useLoaderData() as {
    theater: MovieTypes[];
  };

  return (
    <section className="theater-movie">
      <h2 className="popular-movie-title">Films à l'affiche</h2>
      <div className="container">
        <div className="all-cards">
          {theater.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
