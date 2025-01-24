import { Link, useLoaderData, useParams } from "react-router-dom";
import CastingCard from "../components/CastingCard";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import "../styles/search.css";

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
  const backgroundImg = results.find(
    (item) => item.backdrop_path,
  )?.backdrop_path;
  return (
    <>
      {backgroundImg ? (
        <Header
          backgroundImg={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backgroundImg}`}
        />
      ) : (
        <Header backgroundImg="" />
      )}
      <p className="resultsfor">Résultats pour: {userSearch}</p>
      <p className="resultsfor">Il y a {results.length} résultats</p>
      <div className="search-results">
        {results.length === 0 ? (
          <p>Aucun résultat trouvé.</p>
        ) : (
          results.map((searchedItem) => (
            <div key={searchedItem.id}>
              {searchedItem.media_type === "movie" && (
                <MovieCard movie={searchedItem} />
              )}
              {searchedItem.media_type === "person" && (
                <Link to={`/artistdetails/${searchedItem.id}`}>
                  <CastingCard artist={searchedItem} />
                </Link>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
