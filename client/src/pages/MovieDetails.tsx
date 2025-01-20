import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import CastingCard from "../components/CastingCard";
import "../styles/moviedetails.css";

interface ActorTypes {
  id: string;
  character: string;
  poster_path: string;
  name: string;
  profile_path: string;
}
type Details = {
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
  runtime: number;
};

export default function MovieDetails() {
  const { details, cast } = useLoaderData() as {
    details: Details;
    cast: ActorTypes[];
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
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt=""
            className="poster"
          />
        </div>
        <div className="right">
          <p className={`rate-${changeColorVote(percentageVote)}`}>
            {percentageVote}%
          </p>
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
          <h2 className="tagline">"{details.tagline}"</h2>
          <p className="synopsis">Synopsis: {details.overview}</p>
          <p className="daterelease">Date de sortie: {newFormatDate}</p>
          <p className="country">Pays: {details.origin_country}</p>
          <p className="budget">Budget: ${formatBudget}</p>
        </div>
      </section>
      <h1 className="titlecast">Casting</h1>
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
    </section>
  );
}
