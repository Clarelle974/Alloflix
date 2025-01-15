import { useLoaderData } from "react-router-dom";
import TrailerCard from "./TrailerCard";

interface MovieTypes {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}
export default function Trailer() {
  const data = useLoaderData() as MovieTypes[];
  return (
    <>
      <section>
        <h2 className="popular-movie-title">Bandes-annonces</h2>
        <div className="container">
          <article className="all-cards">
            {data.map((movie) => (
              <TrailerCard key={movie.id} movie={movie} />
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
