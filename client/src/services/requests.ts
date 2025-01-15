import axios from "axios";

const optionsPopularMovies = {
  method: "GET",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`,
  },
};

const getPopularMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
      optionsPopularMovies,
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getCategories = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", optionsPopularMovies)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getDetailsMovie = (movie_id: number) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}`, optionsPopularMovies)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getCreditsMovie = (movie_id: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
      optionsPopularMovies,
    )
    .then((response) => response.data.cast)
    .catch((error) => console.error(error));
};

export { getCategories, getPopularMovies, getDetailsMovie, getCreditsMovie };
