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

export { getCategories, getPopularMovies };
