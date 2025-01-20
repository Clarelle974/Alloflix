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
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
        }
        alt=""
        className="profilepic"
      />
    </div>
  );
}
