import { useLoaderData, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "../styles/movies.css";

interface MovieTypes {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function Movies() {
  const { type } = useParams();
  const allData = useLoaderData() as {
    toprated: MovieTypes[];
    popular: MovieTypes[];
    upcoming: MovieTypes[];
    theater: MovieTypes[];
  };
  let h2ListTitle = "Films populaires";
  let data = allData.popular;

  if (type === "upcoming") {
    h2ListTitle = "Prochainement à l'affiche";
    data = allData.upcoming;
  }
  if (type === "now-playing") {
    h2ListTitle = "Films à l'affiche";
    data = allData.theater;
  }

  return (
    <>
      <h2 className="title">{h2ListTitle}</h2>
      <section className="section-movies">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}
