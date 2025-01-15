import "../styles/movieCard.css";

interface MovieTypes {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  };
}
export default function MovieCard({ movie }: MovieTypes) {
  const percentageVote = Math.trunc(movie.vote_average * 10);
  const year = movie.release_date.split("-")[0];
  return (
    <div className="cards-display">
      <div className="movieCard">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="img-movie-card"
        />
        <div id="rate">{percentageVote}%</div>
        <h2 className="movie-title-card">{movie.title}</h2>
        <h3 className="movie-year-card">{year}</h3>
      </div>
    </div>
  );
}
