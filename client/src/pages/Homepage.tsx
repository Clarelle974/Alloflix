import Header from "../components/Header";
import PopularMovie from "../components/PopularMovie";
import TheaterMovie from "../components/TheaterMovie";
import Trailer from "../components/Trailer";
import UpcomingMovies from "../components/UpcomingMovies";

export default function Homepage() {
  return (
    <>
      <Header />
      <PopularMovie />
      <Trailer />
      <TheaterMovie />
      <UpcomingMovies />
    </>
  );
}
