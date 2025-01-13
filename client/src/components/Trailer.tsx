// import { Link } from "react-router-dom";

interface MovieTypes {
  movie: {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  };
}
// interface TrailerTypes {
//   id: number;
//   results: [
//     {
//       key: string;
//     },
//   ];
// }
export default function Trailer({ movie }: MovieTypes) {
  const backdropSrc = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;
  //associer le link à l'ID de la vidéo avec conditions pour le src :
  // si source = youtube, alrs le chemin est ...
  // utiliser useEffect
  // const trailersData = useLoaderData() as TrailerTypes;
  // console.info(trailersData);
  return (
    <>
      <img src={backdropSrc} alt={movie.title} />
      {/* <Link
          to={`https://www.youtube.com/watch?v=${trailersData.results[0].key}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir la bande-annonce
        </Link> */}
      {/* </button> */}
      {/* <Trailer key={data.results[0].id} /> */}
    </>
  );
}
