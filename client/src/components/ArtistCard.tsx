import { Link } from "react-router-dom";

interface ArtistTypes {
  artist: {
    id: number;
    name: string;
    original_name: string;
    known_for_department: string;
    profile_path: string;
  };
}

export default function ArtistCard({ artist }: ArtistTypes) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="artistcard-display">
      <div className="artistCard">
        <Link
          to={`/artistdetails/${artist.id}`}
          className="link-artist"
          onClick={scrollToTop}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${artist.profile_path}`}
            alt={artist.name}
            className="img-artist-card"
          />
        </Link>
        <h2 className="artist-name-card">{artist.name}</h2>
      </div>
    </div>
  );
}
