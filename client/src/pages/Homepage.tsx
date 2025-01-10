import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

export default function Homepage() {
  return (
    <>
      <Header />
      <h2>Tendances</h2>
      <div className="cards-display">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}
