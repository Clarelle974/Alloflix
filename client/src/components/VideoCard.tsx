import { Link } from "react-router-dom";
import "../styles/movieCard.css";
import "../styles/popularmovie.css";
import "../styles/videoCard.css";

interface VideoTypes {
  video: {
    name: string;
    key: string;
    site: string;
    type: string;
    id: string;
  };
}

export default function VideoCard({ video }: VideoTypes) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="cards-display">
      <div className="movieCard">
        <Link
          to={`https://www.youtube.com/watch?v=${video.key}`}
          className="link-movie"
          onClick={scrollToTop}
        >
          <img
            src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
            alt={video.name}
            className="img-movie-card"
          />
        </Link>
        <div className="videoInfo">
          <p>
            <i>{video.name}</i>
          </p>
          <p>Type : {video.type}</p>
        </div>
      </div>
    </div>
  );
}
