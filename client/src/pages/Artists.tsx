import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArtistCard from "../components/ArtistCard";
import "../styles/artistcard.css";

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

  let title = "Artistes";

  let askedData = data;

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
