import { useLoaderData } from "react-router-dom";
import Filmography from "../components/Filmography";

interface Datatypes {
  name: string;
  profile_path: string;
  known_for_department: string;
  place_of_birth: string;
  birthday: string;
  biography: string;
  deathday: string;
}

interface ActorTypes {
  id: string;
  character: string;
  poster_path: string;
}
export default function ArtistDetails() {
  const { data, credits } = useLoaderData() as {
    data: Datatypes;
    credits: ActorTypes[];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const deathDate = () => {
    if (!data.deathday) {
      null;
    } else {
      return <p>Date de décès: {formatDate(data.deathday)}</p>;
    }
  };

  return (
    <>
      <section className="detailscards">
        <div className="left">
          <h1 className="namedetails">{data.name}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt="acteur"
            className="poster"
          />
        </div>
        <div className="right">
          <h2>{data.known_for_department}</h2>
          <h4 className="originactor">
            Lieu de naissance: {data.place_of_birth}
          </h4>
          <p className="birthday">
            Date de naissance: {formatDate(data.birthday)}
          </p>
          <p>{deathDate()}</p>
          <p className="biography">{data.biography}</p>
        </div>
      </section>
      <h2 className="filmotitle">Filmographie</h2>
      <div className="cast2">
        {credits.slice(0, 7).map((actor) => (
          <Filmography key={actor.id} actor={actor} />
        ))}
      </div>
    </>
  );
}
