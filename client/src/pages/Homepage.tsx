import Header from "../components/Header";
import PopularMovie from "../components/PopularMovie";
import TheaterMovie from "../components/TheaterMovie";
import Trailer from "../components/Trailer";

export default function Homepage() {
  return (
    <>
      <Header />
      <PopularMovie />
      <Trailer />
      <TheaterMovie />
    </>
  );
}
