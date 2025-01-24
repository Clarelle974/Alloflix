import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/movieCard.css";
import "../styles/popularmovie.css";
import "../styles/videoCard.css";

export default function VideoCard({ video }: VideoTypes) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
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
      <div className="movieCard">
        <Link to={"#"} className="link-movie" onClick={openModal}>
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
            src={`https://www.youtube.com/embed/${video.key}`}
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
