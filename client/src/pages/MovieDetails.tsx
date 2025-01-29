import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import CastingCard from "../components/CastingCard";
import "../styles/moviedetails.css";

import playIcon from "../assets/images/play-icon-light.png";
import MovieCard from "../components/MovieCard";
import VideoCard from "../components/VideoCard";

export default function MovieDetails() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { details, cast, recommendations, allFrVideos, allEnVideos } =
    useLoaderData() as {
      details: MovieTypes;
      cast: ArtistTypes[];
      recommendations: MovieTypes[];
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

  const openModal = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

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
              <Link to={"#"} onClick={openModal} className="trailer-link">
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
            <CastingCard artist={actor} />
          </Link>
        ))}
      </div>
      <h2 className="titlecast">Vidéos et Bandes-annonces</h2>
      <div className="container">
        <p>En français</p>
        <div className="all-cards-trailer">
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
        <div className="all-cards-trailer">
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

      <dialog
        ref={dialogRef}
        className="modal"
        onClick={closeModal}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        }}
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          <button className="close-button" onClick={closeModal} type="button">
            &times;
          </button>
          <iframe
            width="100%"
            height="930"
            src={`https://www.youtube.com/embed/${srcTrailerKey}`}
            title="YouTube video player"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </dialog>
    </section>
  );
}
