import { useLoaderData, useParams } from "react-router-dom";
import CastingCard from "../components/CastingCard";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import "../styles/search.css";

interface ResultsTypes {
  id: number;
  title: string;
  name: string;
  profile_path: string;
  character: string;
  media_type: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function Search() {
  const { userSearch } = useParams();
  const allResults = useLoaderData() as ResultsTypes[];
  const results = allResults.filter((searchedItem) => {
    if (searchedItem.media_type === "tv") return false;

    const hasImage =
      (searchedItem.media_type === "movie" &&
        searchedItem.poster_path !== null) ||
      (searchedItem.media_type === "person" &&
        searchedItem.profile_path !== null);

    return hasImage;
  });
  console.info(results);
  const backgroundImg = results[0].backdrop_path;
  return (
    <>
      <Header backgroundImg={backgroundImg} />
      <div className="search-results">
        <p>Résultats pour {userSearch}</p>
        {results.length === 0 ? (
          <p>Aucun résultat trouvé.</p>
        ) : (
          results.map((searchedItem) => (
            <div key={searchedItem.id}>
              {searchedItem.media_type === "movie" && (
                <MovieCard movie={searchedItem} />
              )}
              {/* ligne suivante à remplacer quand ArtistCard sera prêt  */}
              {searchedItem.media_type === "person" && (
                <CastingCard cast={searchedItem} />
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
