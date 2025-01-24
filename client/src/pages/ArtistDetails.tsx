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
  Acting: string;
  Directing: string;
  original_title: string;
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

  const translate = (department: string): string => {
    const translation: { [key: string]: string } = {
      Acting: "Acteur",
      Writing: "Scénariste",
      Directing: "Réalisateur",
    };
    return translation[department] || department;
  };

  return (
    <>
      <section className="detailscards">
        <div className="left">
          <img
            src={
              data.profile_path
                ? `https://image.tmdb.org/t/p/w500${data.profile_path}`
                : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
            }
            alt="acteur"
            className="poster"
          />
          <h2>{translate(data.known_for_department)}</h2>
          <h5 className="originactor">
            Lieu de naissance: <br />
            {data.place_of_birth}
          </h5>
          <p className="birthday">
            Date de naissance: <br />
            {formatDate(data.birthday)}
          </p>
          <p>{deathDate()}</p>
        </div>
        <div className="right">
          <h1 className="namedetails">{data.name}</h1>

          <section className="allbio">
            <h3 className="bio">Biographie</h3>
            <p>{data.biography.slice(0, 226)}...</p>
            <details>
              <summary>Lire la suite</summary>
              <p className="biography">
                {data.biography
                  ? data.biography.substring(226)
                  : "Nous n' avons pas d' autres informations sur cet artiste"}
              </p>
            </details>
          </section>
          <h2 className="filmotitle">Filmographie</h2>
          <div className="cast3">
            {credits.slice(0, 20).map((actor) => (
              <Filmography key={actor.id} actor={actor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
