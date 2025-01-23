import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/trailerCard.css";
import playIcon from "../assets/images/play-icon-light.png";

interface MovieTypes {
  movie: {
    id: number;
    backdrop_path: string | null;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  };
}
export default function TrailerCard({ movie }: MovieTypes) {
  const backdropSrc = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;
  const [srcKey, setSrcKey] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    const config = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
    };
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, config)
      .then((res) => {
        setSrcKey(res.data.results[0].key);
      })
      .catch((error) => console.error(error));
  }, [movie.id]);

  if (!srcKey) {
    return null;
  }

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className="cards-display">
      <div className="trailer">
        <div
          className="trailer-link"
          onClick={toggleModal}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleModal();
            }
          }}
        >
          <img src={backdropSrc} alt={movie.title} className="trailer-img" />
          <img src={playIcon} alt="play" className="icon" />
        </div>
        <h2 className="trailer-name">{movie.title}</h2>
      </div>

      {modal && (
        <div
          className="modal-overlay"
          onClick={toggleModal}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleModal();
            }
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleModal();
              }
            }}
          >
            <button
              className="close-button"
              onClick={toggleModal}
              type="button"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="930"
              src={`https://www.youtube.com/embed/${srcKey}`}
              title="YouTube video player"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
