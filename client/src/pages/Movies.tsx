import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "../styles/movies.css";

export default function Movies() {
  const { type } = useParams();
  const allData = useLoaderData() as {
    toprated: MovieTypes[];
    popular: MovieTypes[];
    upcoming: MovieTypes[];
    theater: MovieTypes[];
    toprated2: MovieTypes[];
    toprated3: MovieTypes[];
    toprated4: MovieTypes[];
  };

  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortKey, setSortKey] = useState("");

  let h2ListTitle = "Films les mieux notés";
  let data = [
    ...allData.toprated,
    ...allData.toprated2,
    ...allData.toprated3,
    ...allData.toprated4,
  ];

  if (type === "toprated") {
    h2ListTitle = "Films les mieux notés";
    data = [...allData.toprated, ...allData.toprated2, ...allData.toprated3];
  }

  if (type === "popular") {
    h2ListTitle = "Films populaires";
    data = allData.popular;
  }
  if (type === "upcoming") {
    h2ListTitle = "Prochainement à l'affiche";
    data = allData.upcoming;
  }
  if (type === "now-playing") {
    h2ListTitle = "Films à l'affiche";
    data = allData.theater;
  }

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };
  const handleSortKeyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortKey(event.target.value);
  };

  const filteredData = selectedGenre
    ? data.filter((movie) => movie.genre_ids.includes(Number(selectedGenre)))
    : data;

  const sortFunctions = {
    popularity: (a: MovieTypes, b: MovieTypes) => b.popularity - a.popularity,
    popularity_low: (a: MovieTypes, b: MovieTypes) =>
      a.popularity - b.popularity,
    vote_average: (a: MovieTypes, b: MovieTypes) =>
      b.vote_average - a.vote_average,
    vote_average_low: (a: MovieTypes, b: MovieTypes) =>
      a.vote_average - b.vote_average,
    release_date: (a: MovieTypes, b: MovieTypes) =>
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime(),
    release_date_low: (a: MovieTypes, b: MovieTypes) =>
      new Date(a.release_date).getTime() - new Date(b.release_date).getTime(),
  };

  const sortedData = sortKey
    ? [...filteredData].sort(
        sortFunctions[sortKey as keyof typeof sortFunctions],
      )
    : filteredData;

  return (
    <>
      <h2 className="title">{h2ListTitle}</h2>
      <div>
        <select
          required
          aria-label="filtrer par genre"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="" disabled selected>
            Selectionner un genre
          </option>
          <option value="">Tous</option>
          <option value="28">Action</option>
          <option value="12">Aventure</option>
          <option value="35">Comedie</option>
          <option value="10749">Romance</option>
          <option value="878">Science-Fiction</option>
          <option value="53">Thriller</option>
          <option value="27">Horreur</option>
        </select>
      </div>
      <div>
        <select
          required
          aria-label="trier les films"
          value={sortKey}
          onChange={handleSortKeyChange}
        >
          <option value="" disabled selected>
            Trier par ...
          </option>
          <option value="popularity">Les + populaires</option>
          <option value="popularity_low">Les - populaires</option>
          <option value="release_date">Les + récents</option>
          <option value="release_date_low">Les - récents</option>
          <option value="vote_average">Les mieux notés</option>
          <option value="vote_average_low">Les moins bien notés</option>
        </select>
      </div>
      <section className="section-movies">
        {sortedData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}
