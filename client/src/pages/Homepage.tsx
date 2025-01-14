import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
// import MovieCard from "../components/MovieCard";
import Trailer from "../components/Trailer";

interface MovieTypes {
  id: number;
  backdrop_path: string;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function Homepage() {
  const discoverData = useLoaderData() as MovieTypes[];
  console.info(discoverData);
  return (
    <>
      <Header />
      <h2>Tendances</h2>
      <div className="cards-display">
        {/* {<MovieCard key={movie.id} movie={movie} />} */}
      </div>
      <h2>Bandes-annonces</h2>
      <div className="cards-display">
        {discoverData.map((movie) => (
          <Trailer key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
