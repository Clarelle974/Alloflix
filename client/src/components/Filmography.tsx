import { Link } from "react-router-dom";

export default function Filmography({ artist }: ArtistDataTypes) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      to={`/moviedetails/${artist.id}`}
      key={artist.id}
      onClick={scrollToTop}
    >
      <div className="movieCard">
        <img
          src={
            artist.poster_path
              ? `https://image.tmdb.org/t/p/w500${artist.poster_path}`
              : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
          }
          alt="acteur"
          className="img-movie-card"
        />
        <div className="topgap">
          <h2 className="movie-title-card">{artist.original_title}</h2>
          <h2 className="movie-year-card">{artist.character}</h2>
        </div>
      </div>
    </Link>
  );
}
