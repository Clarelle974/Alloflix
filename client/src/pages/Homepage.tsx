import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
// import JoinUs from "../components/JoinUs";
import PopularMovie from "../components/PopularMovie";
import TheaterMovie from "../components/TheaterMovie";
import Trailer from "../components/Trailer";
import UpcomingMovies from "../components/UpcomingMovies";

interface Homepage {
  backdrop_path: string;
}

export default function Homepage() {
  const { popular } = useLoaderData() as {
    popular: Homepage[];
  };

  const backgroundImg = popular[1].backdrop_path;
  const backgroundImgJoinUs = popular[2].backdrop_path;
  console.info(`background from Homepage ${backgroundImgJoinUs}`);

  return (
    <>
      <Header backgroundImg={backgroundImg} />
      <PopularMovie />
      <Trailer />
      <TheaterMovie />
      <UpcomingMovies />
      {/* <JoinUs backgroundImgJoinUs={backgroundImgJoinUs} /> */}
    </>
  );
}
