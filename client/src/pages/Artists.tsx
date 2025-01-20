import { useLoaderData } from "react-router-dom";
import ArtistCard from "../components/ArtistCard";

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
  console.info(data);

  return (
    <>
      <h1>Page des artistes</h1>
      <section className="section-artists">
        {data.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </section>
    </>
  );
}
