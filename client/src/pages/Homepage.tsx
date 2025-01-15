import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import PopularMovie from "../components/PopularMovie";
import TheaterMovie from "../components/TheaterMovie";
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
  return (
    <>
      <Header />
      <PopularMovie />
      {discoverData.map((movie) => (
        <Trailer key={movie.id} movie={movie} />
      ))}
      <TheaterMovie />
    </>
  );
}
