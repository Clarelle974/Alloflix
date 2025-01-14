import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/trailer.css";

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

export default function Trailer({ movie }: MovieTypes) {
  const backdropSrc = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;
  const [srcKey, setSrcKey] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
      params: { language: "fr-FR" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
        // Authorization:
        //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWFiZjgyYTI4ZWYzYTUzNjZiY2JiMGQzZjAwZGZmYSIsIm5iZiI6MTczNjM0MzMxNi4wNTIsInN1YiI6IjY3N2U3ZjE0Mzg4MWM3OTQxOWJiMTMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFl-_q6Yb0Znq_mpiGMVve0iUnCAJ-Z7Uo4xpWd4x-4",
      },
    };

    axios
      .request(options)
      .then((res) => {
        //ajouter une condition pour vérifier que le site source est Youtube (res.data.results[0].site==="YouTube");
        //ajouter une condition pour vérifier que la video est un trailer (res.data.results[0].type==="Trailer");
        if (res.data.results.length > 0) {
          setSrcKey(res.data.results[0].key);
        } else {
          console.error("Aucune vidéo disponible.");
        }
      })
      .catch((error) => console.error(error));
  }, [movie.id]);

  return (
    <article className="trailer">
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
    </article>
  );
}
