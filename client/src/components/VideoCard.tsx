import { useState } from "react";
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
  const [modal, setModal] = useState(false);
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
      <div className="movieCard">
        <Link to={"#"} className="link-movie" onClick={toggleModal}>
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
              src={`https://www.youtube.com/embed/${video.key}`}
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
