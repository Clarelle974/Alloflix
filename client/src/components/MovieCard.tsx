import "../styles/movieCard.css";
export default function MovieCard() {
  return (
    <>
      <div className="test">
        <div className="movieCard">
          <img
            src="src/assets/images/Mufasa_sample.webp"
            alt="vignette de film"
          />
          <div id="rate">75%</div>
          <h2>Mufasa</h2>
          <h3>2024</h3>
        </div>
      </div>
    </>
  );
}
