import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import PopularMovie from "../components/PopularMovie";
import TheaterMovie from "../components/TheaterMovie";
import Trailer from "../components/Trailer";
import UpcomingMovies from "../components/UpcomingMovies";

export default function Homepage() {
  const { popular } = useLoaderData() as {
    popular: Background[];
  };

  const backgroundImg = popular[1].backdrop_path;

  return (
    <>
      <Header backdrop_path={backgroundImg} />
      <PopularMovie />
      <Trailer />
      <TheaterMovie />
      <UpcomingMovies />
    </>
  );
}
