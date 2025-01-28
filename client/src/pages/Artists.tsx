import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArtistCard from "../components/ArtistCard";
import "../styles/artistcard.css";

export default function Artists() {
  const data = useLoaderData() as ArtistTypes[];

  const { type } = useParams();

  const actingData = data.filter(
    (artist) => artist.known_for_department === "Acting",
  );

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
      <h2 className="artists-title">{title}</h2>
      <section className="section-artists">
        {askedData.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </section>
    </>
  );
}
