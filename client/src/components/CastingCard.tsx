import "../styles/moviedetails.css";

interface Cardtypes {
  cast: {
    name: string;
    profile_path: string;
    id: string;
    character: string;
    poster_path: string;
  };
}

export default function CastingCard({ cast }: Cardtypes) {
  return (
    <div>
      <h3 className="castname">{cast.name}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
        alt=""
        className="profilepic"
      />
    </div>
  );
}
