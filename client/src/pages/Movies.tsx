import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "../styles/movies.css";

interface MovieTypes {
  id: number;
  title: string; //ou name ?
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function Movies() {
  const data = useLoaderData() as MovieTypes[];

  return (
    <>
      <h2 className="title">Films populaires</h2>
      <section className="moviepage">
        {data.map((movie) => (
          <Link to={`/moviedetails/${movie.id}`} key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </section>
    </>
  );
}
