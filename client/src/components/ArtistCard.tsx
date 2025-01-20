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
  return (
    <div className="artistcard-display">
      <div className="artistCard">
        <img
          src={`https://image.tmdb.org/t/p/w500${artist.profile_path}`}
          alt={artist.name}
          className="img-artist-card"
        />
      </div>
    </div>
  );
}
