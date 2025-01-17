import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import CastingCard from "../components/CastingCard";
import "../styles/moviedetails.css";
export default function MovieDetails() {
  type CastMember = {
    name: string;
    profile_path?: string;
    character?: string;
    id: number;
  };

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
  };
  const { details, cast } = useLoaderData() as {
    details: Details;
    cast: CastMember[];
  };
  const percentageVote = Math.trunc(details.vote_average * 10);

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
          <p className="rate">{percentageVote}%</p>
          <p>
            {details.genres.map((genre, index) => (
              <span key={index as number}>
                {genre.name}
                {index < details.genres.length - 1 && ", "}
              </span>
            ))}
          </p>
          <h2>"{details.tagline}"</h2>
          <p className="synopsis">Synopsis: {details.overview}</p>
          <p className="daterelease">Date de sortie: {details.release_date}</p>
          <p className="country">Pays: {details.origin_country}</p>
          <p className="budget">Budget: {details.budget}$</p>
        </div>
      </section>
      <h1 className="titlecast">Casting</h1>
      <div className="cast2">
        {cast.slice(0, 7).map((cast) => (
          <Link to="/artistdetails" key={cast.id}>
            <CastingCard key={cast.id} />
          </Link>
        ))}
      </div>
    </section>
  );
}
