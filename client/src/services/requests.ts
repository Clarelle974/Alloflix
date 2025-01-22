import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

const config = {
  params: { language: "fr-FR", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};

const configPage2 = {
  params: { language: "fr-FR", page: "2" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};

const configPage3 = {
  params: { language: "fr-FR", page: "3" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};

const configPage4 = {
  params: { language: "fr-FR", page: "3" },
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

const getArtists = () => {
  return axios
    .get("https://api.themoviedb.org/3/person/popular", config)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getTheaterMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/now_playing", configPage2)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getDetailsMovie = (movie_id: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?append_to_response=videos`,
      config,
    )
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

const getSearchMovie = (userSearch: string) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/multi?query=${userSearch}&include_adult=false&language=fr-FR&page=1`,
      config,
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getUpcomingMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/upcoming", configPage2)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getTopRatedMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/top_rated", config)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getTopRatedMovies2 = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/top_rated", configPage2)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getTopRatedMovies3 = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/top_rated", configPage3)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getTopRatedMovies4 = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/top_rated", configPage4)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getRecommendations = (movie_id: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/recommendations`,
      config,
    )

    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export {
  getArtists,
  getPopularMovies,
  getDetailsMovie,
  getCreditsMovie,
  getDetailsArtist,
  getCombinedCredits,
  getRecommendations,
  getTheaterMovies,
  getTopRatedMovies,
  getTopRatedMovies2,
  getTopRatedMovies3,
  getTopRatedMovies4,
  getSearchMovie,
  getUpcomingMovies,
};
