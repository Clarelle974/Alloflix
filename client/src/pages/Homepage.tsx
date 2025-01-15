import Header from "../components/Header";
import PopularMovie from "../components/PopularMovie";
import Trailer from "../components/Trailer";

// interface MovieTypes {
//   id: number;
//   backdrop_path: string;
//   title: string;
//   poster_path: string;
//   vote_average: number;
//   release_date: string;
// }

export default function Homepage() {
  return (
    <>
      <Header />
      <PopularMovie />
      <Trailer />
    </>
  );
}
