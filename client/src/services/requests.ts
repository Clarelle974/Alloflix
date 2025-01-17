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

const getTheaterMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/now_playing", config)
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

const getDetailsArtist = (person_id: number) => {
  return axios
    .get(`https://api.themoviedb.org/3/person/${person_id}`, config)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getCombinedCredits = (person_id: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/person/${person_id}/combined_credits`,
      config,
    )
    .then((response) => response.data.cast);
};

const getSearchMovie = (movie: string) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=fr-FR&page=1`,
      config,
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getUpcomingMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/upcoming", config)
    .then((response) => response.data.results)

    .catch((error) => console.error(error));
};

export {
  getCategories,
  getPopularMovies,
  getDetailsMovie,
  getCreditsMovie,
  getDetailsArtist,
  getCombinedCredits,
  getTheaterMovies,
  getSearchMovie,
  getUpcomingMovies,
};
