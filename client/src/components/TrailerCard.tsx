import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/trailerCard.css";

interface MovieTypes {
  movie: {
    id: number;
    backdrop_path: string;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  };
}
export default function TrailerCard({ movie }: MovieTypes) {
  const backdropSrc = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;
  const [srcKey, setSrcKey] = useState();

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    const config = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
    };
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, config)
      .then((res) => {
        //ajouter une condition pour vérifier que le site source est Youtube (res.data.results[0].site==="YouTube");
        //ajouter une condition pour vérifier que la video est un trailer (res.data.results[0].type==="Trailer");
        setSrcKey(res.data.results[0].key);
      })
      .catch((error) => console.error(error));
  }, [movie.id]);

  return (
    <div className="cards-display">
      <div className="trailer">
        <Link
          to={`https://www.youtube.com/watch?v=${srcKey}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={backdropSrc} alt={movie.title} />
          <img
            src="src/assets/images/play-icon-light.png"
            alt="play"
            className="icon"
          />
        </Link>
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
}
