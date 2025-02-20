import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "../styles/trailerCard.css";
import playIcon from "../assets/images/play-icon-light.png";

export default function TrailerCard({ movie }: MovieDataTypes) {
  const backdropSrc = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;
  const [srcKey, setSrcKey] = useState();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

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
        if (res.data.results.length > 0 && res.data.results[0].key) {
          setSrcKey(res.data.results[0].key);
        } else {
          setSrcKey(undefined);
        }
      })
      .catch((error) => console.error(error));
  }, [movie.id]);

  if (!srcKey) {
    return null;
  }

  const openModal = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  return (
    <div className="cards-display">
      <div className="trailer">
        <div
          className="trailer-link"
          onClick={openModal}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openModal();
            }
          }}
        >
          <img src={backdropSrc} alt={movie.title} className="trailer-img" />
          <img src={playIcon} alt="play" className="icon" />
        </div>
        <h2 className="trailer-name">{movie.title}</h2>
      </div>

      <dialog
        ref={dialogRef}
        className="modal"
        onClick={closeModal}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        }}
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          <button className="close-button" onClick={closeModal} type="button">
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
      </dialog>
    </div>
  );
}
