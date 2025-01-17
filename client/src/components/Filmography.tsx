import { Link } from "react-router-dom";

interface ActorTypes {
  actor: {
    id: string;
    character: string;
    poster_path: string;
  };
}

export default function Filmography({ actor }: ActorTypes) {
  return (
    <Link to={`/moviedetails/${actor.id}`} key={actor.id}>
      <div className="cardcast">
        <h3 className="castname">{actor.character}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500${actor.poster_path}`}
          alt="acteur"
          className="profilepic"
        />
      </div>
    </Link>
  );
}
