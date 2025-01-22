import { Link } from "react-router-dom";
import "../styles/Page404.css";

export default function Page404Bis() {
  return (
    <main className="main-page404">
      <div className="container-404">
        <h3 className="title-404">Oops! 🚀</h3>
        <div className="div-404">
          <h2 className="h2-404 h2-404-left">4</h2>
          <img
            src="https://m.media-amazon.com/images/I/81ipqvacTtL._h1_.png"
            alt="Moon"
            className="moon-image"
          />
          <h2 className="h2-404 h2-404-right">4</h2>
        </div>
        <h1 className="h1-404">It looks you're lost</h1>
        <p className="p-404">We can't find the page you're looking for.</p>
        <Link to="/" className="button-404">
          Back to home
        </Link>
      </div>
    </main>
  );
}
