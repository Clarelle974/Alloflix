import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "../styles/movies.css";

interface MovieTypes {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

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

  const filteredData = selectedGenre
    ? data.filter((movie) => movie.genre_ids.includes(Number(selectedGenre)))
    : data;

  return (
    <>
      <h2 className="title">{h2ListTitle}</h2>
      <div>
        <select
          required
          aria-label="select"
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
      <section className="section-movies">
        {filteredData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}
