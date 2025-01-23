import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import CastingCard from "../components/CastingCard";
import "../styles/moviedetails.css";

import playIcon from "../assets/images/play-icon-light.png";
import MovieCard from "../components/MovieCard";
import VideoCard from "../components/VideoCard";

interface ActorTypes {
  id: number;
  character: string;
  poster_path: string;
  name: string;
  profile_path: string;
}
type Details = {
  id: number;
  backdrop_path?: string;
  vote_average: number;
  original_title: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  overview: string;
  release_date: string;
  origin_country: string;
  budget: number;
  tagline: string;
  title: string;
  runtime: number;
  videos: Videos;
};
interface Videos {
  results: VideoResults[];
}
interface VideoResults {
  name: string;
  key: string;
  site: string;
  type: string;
  id: string;
}

export default function MovieDetails() {
  const { details, cast, recommendations, allFrVideos, allEnVideos } =
    useLoaderData() as {
      details: Details;
      cast: ActorTypes[];
      recommendations: Details[];
      allFrVideos: VideoResults[];
      allEnVideos: VideoResults[];
    };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const formatBudget = details.budget.toLocaleString("en-US");

  function formatRunTime(runtime: number) {
    if (runtime === null || runtime === 0) {
      return "Durée du film non disponible";
    }
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const newFormatDate = formatDate(details.release_date);

  const percentageVote = Math.trunc(details.vote_average * 10);

  const changeColorVote = (vote: number) => {
    if (vote >= 70) return "green";
    if (vote >= 50) return "orange";
    return "red";
  };

  const trailerFrVideo = allFrVideos.find((video) => video.type === "Trailer");
  const trailerEnVideo = allEnVideos.find((video) => video.type === "Trailer");
  let srcTrailerKey = null;
  if (trailerFrVideo) {
    srcTrailerKey = trailerFrVideo.key;
  } else if (trailerEnVideo) {
    srcTrailerKey = trailerEnVideo.key;
  }

  const youtubeFrVideos = allFrVideos.filter(
    (video) => video.site === "YouTube",
  );
  const youtubeEnVideos = allEnVideos.filter(
    (video) => video.site === "YouTube",
  );

  return (
    <section className="alldetails">
      <section
        className="detailscards"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.7)), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="left">
          <h1 className="namedetails">{details.original_title}</h1>
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
            }
            alt=""
            className="poster"
          />
        </div>
        <div className="right">
          <div className="top">
            <p className={`rate-${changeColorVote(percentageVote)}`}>
              {percentageVote}%
            </p>
            {srcTrailerKey ? (
              <Link
                to={`https://www.youtube.com/watch?v=${srcTrailerKey}`}
                target="_blank"
                rel="noopener noreferrer"
                className="trailer-link"
              >
                <img src={playIcon} alt="play" />
                Bande-annonce
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="infos-movie">
            <p>
              {details.genres.map((genre, index) => (
                <span key={index as number}>
                  {genre.name}
                  {index < details.genres.length - 1 && ", "}
                </span>
              ))}
              <span> -</span>
            </p>
            <p className="runtime">{formatRunTime(details.runtime)}</p>
          </div>
          <h2 className="tagline">
            {details.tagline ? `"${details.tagline}"` : ""}
          </h2>
          <p className="synopsis">
            {details.overview
              ? `Synopsis: ${details.overview}`
              : "Il n'y a pas d' informations pour ce film"}
          </p>
          <p className="daterelease">Date de sortie: {newFormatDate}</p>
          <p className="country">Pays: {details.origin_country}</p>
          <p className="budget">
            Budget: {details.budget > 0 ? `$${formatBudget}` : "Non disponible"}
          </p>
        </div>
      </section>
      <h2 className="titlecast">Casting</h2>
      <div className="cast2">
        {cast.slice(0, 7).map((actor) => (
          <Link
            to={`/artistdetails/${actor.id}`}
            key={actor.id}
            onClick={scrollToTop}
          >
            <CastingCard cast={actor} />
          </Link>
        ))}
      </div>
      <h2 className="titlecast">Vidéos et Bandes-annonces</h2>
      <div className="container">
        <p>En français</p>
        <div className="all-cards">
          {youtubeFrVideos && youtubeFrVideos.length > 0 ? (
            youtubeFrVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          ) : (
            <p>
              <i>Pas de vidéo disponible</i>
            </p>
          )}
        </div>
        <p>En anglais</p>
        <div className="all-cards">
          {youtubeEnVideos && youtubeEnVideos.length > 0 ? (
            youtubeEnVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          ) : (
            <p>
              <i>Pas de vidéo disponible</i>
            </p>
          )}
        </div>
      </div>
      <h2 className="titlecast">Ça pourrait vous plaire aussi ...</h2>
      <div className="container">
        <div className="all-cards">
          {recommendations.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
