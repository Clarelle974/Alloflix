import "../styles/moviedetails.css";

export default function CastingCard({ artist }: ArtistDataTypes) {
  return (
    <div className="movieCard">
      <img
        src={
          artist.profile_path
            ? `https://image.tmdb.org/t/p/w500${artist.profile_path}`
            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
        }
        alt=""
        className="profilepic"
      />
      <h3 className="castname">{artist.name}</h3>
    </div>
  );
}
