import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

const config = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};

const getPopularMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", config)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getCategories = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", config)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getDetailsMovie = (movie_id: number) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}`, config)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getCreditsMovie = (movie_id: number) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, config)
    .then((response) => response.data.cast)
    .catch((error) => console.error(error));
};

export { getCategories, getPopularMovies, getDetailsMovie, getCreditsMovie };
