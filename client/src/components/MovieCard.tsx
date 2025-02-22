import { Link } from "react-router-dom";
import "../styles/movieCard.css";

export default function MovieCard({ movie }: MovieDataTypes) {
  const percentageVote = Math.trunc(movie.vote_average * 10);
  const year = movie.release_date.split("-")[0];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeColorVote = (vote: number) => {
    if (vote >= 70) return "green";
    if (vote >= 50) return "orange";
    return "red";
  };

  return (
    <div className="cards-display">
      <div className="movieCard">
        <Link
          to={`/moviedetails/${movie.id}`}
          className="link-movie"
          onClick={scrollToTop}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
            }
            alt={movie.title}
            className="img-movie-card"
          />
        </Link>
        <div className={`rate-${changeColorVote(percentageVote)}`}>
          {percentageVote}%
        </div>
        <h2 className="movie-title-card">{movie.title}</h2>
        <h3 className="movie-year-card">{year}</h3>
      </div>
    </div>
  );
}
