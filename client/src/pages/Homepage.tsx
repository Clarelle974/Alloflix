import Header from "../components/Header";

export default function Homepage() {
  return (
    <>
      <Header />
      <h2>Tendances</h2>
      <div className="cards-display">
        {/* { <MovieCard key={movie.id} movie={movie} />} */}
      </div>
    </>
  );
}
