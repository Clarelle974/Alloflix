import { useLoaderData } from "react-router-dom";
import ArtistCard from "../components/ArtistCard";
import { useParams } from "react-router-dom";

interface ArtistsTypes {
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
}

export default function Artists() {
  const data = useLoaderData() as ArtistsTypes[];

  const { type } = useParams();

  const actingData = data.filter(
    (artist) => artist.known_for_department === "Acting",
  );
  console.info(actingData);

  const directingData = data.filter(
    (artist) => artist.known_for_department === "Directing",
  );

  let title = "Artistes";

  let askedData = data;

  if (type === "acteurs") {
    askedData = actingData;
    title = "Acteurs";
  }

  if (type === "realisateurs") {
    askedData = directingData;
    title = "Réalisateurs";
  }

  if (type === "all") {
    askedData = data;
    title = "Artistes";
  }

  return (
    <>
      <h1>{title}</h1>
      <section className="section-artists">
        {askedData.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </section>
    </>
  );
}
