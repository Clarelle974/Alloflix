import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import "../styles/search.css";

interface ResultsTypes {
  id: number;
  title: string;
  name: string;
  media_type: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function Search() {
  const { userSearch } = useParams();
  const results = useLoaderData() as ResultsTypes[];
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
              {/* ligne suivante à remplacer quand ArtistCard sera prêt avec : {searchedItem.media_type === "person" && <ArtistCard artist={searchedItem} />} */}
              {searchedItem.media_type === "person" && (
                <p> artist={searchedItem.name} </p>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
