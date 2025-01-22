import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TrailerCard from "./TrailerCard";

interface MovieTypes {
  id: number;
  title: string;
  backdrop_path: string | null;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function Trailer() {
  const { popular } = useLoaderData() as {
    popular: MovieTypes[];
  };

  const [hoverTrailer, setHoverTrailer] = useState<MovieTypes | null>(null);

  useEffect(() => {
    if (popular.length > 0) {
      setHoverTrailer(popular[0]);
    }
  }, [popular]);

  return (
    <section
      className="trailer-container"
      style={{
        backgroundImage: hoverTrailer?.backdrop_path
          ? `linear-gradient(rgba(20, 20, 20, 0.62), rgba(14, 14, 14, 0.7)),url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${
              hoverTrailer.backdrop_path
            }')`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="popular-movie-title">Bandes-annonces</h2>
      <div className="container">
        <article className="all-cards">
          {popular.map((movie) => (
            <div
              key={movie.id}
              onMouseEnter={() => setHoverTrailer(movie)}
              onMouseLeave={() => setHoverTrailer(movie)}
            >
              <TrailerCard key={movie.id} movie={movie} />
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
