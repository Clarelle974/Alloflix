import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

interface UpcomingMoviesTypes {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function UpcomingMovies() {
  const { upcoming } = useLoaderData() as {
    upcoming: UpcomingMoviesTypes[];
  };
  return (
    <section className="upcoming-movie">
      <h2 className="popular-movie-title">Films bientôt au cinéma</h2>
      <div className="container">
        <div className="all-cards">
          {upcoming.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
