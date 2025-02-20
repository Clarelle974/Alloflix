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
  params: { language: "fr-FR", page: "4" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};
const configLangEn = {
  params: { language: "En-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};

const getPopularMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", config)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getPopularMovies4 = () => {
  return axios
    .all([
      axios.get("https://api.themoviedb.org/3/movie/popular", config),
      axios.get("https://api.themoviedb.org/3/movie/popular", configPage2),
      axios.get("https://api.themoviedb.org/3/movie/popular", configPage3),
      axios.get("https://api.themoviedb.org/3/movie/popular", configPage4),
    ])
    .then(
      axios.spread((page1, page2, page3, page4) => {
        const response = [
          ...page1.data.results,
          ...page2.data.results,
          ...page3.data.results,
          ...page4.data.results,
        ];
        return response;
      }),
    )
    .catch((error) => console.error(error));
};

const getArtists = () => {
  return axios
    .get("https://api.themoviedb.org/3/person/popular", configLangEn)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getTheaterMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/now_playing", configPage2)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getTheaterMovies4 = () => {
  return axios
    .all([
      axios.get("https://api.themoviedb.org/3/movie/now_playing", config),
      axios.get("https://api.themoviedb.org/3/movie/now_playing", configPage2),
      axios.get("https://api.themoviedb.org/3/movie/now_playing", configPage3),
      axios.get("https://api.themoviedb.org/3/movie/now_playing", configPage4),
    ])
    .then(
      axios.spread((page1, page2, page3, page4) => {
        const response = [
          ...page1.data.results,
          ...page2.data.results,
          ...page3.data.results,
          ...page4.data.results,
        ];
        return response;
      }),
    )
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
const getUpcomingMovies4 = () => {
  return axios
    .all([
      axios.get("https://api.themoviedb.org/3/movie/upcoming", config),
      axios.get("https://api.themoviedb.org/3/movie/upcoming", configPage2),
      axios.get("https://api.themoviedb.org/3/movie/upcoming", configPage3),
      axios.get("https://api.themoviedb.org/3/movie/upcoming", configPage4),
    ])
    .then(
      axios.spread((page1, page2, page3, page4) => {
        const response = [
          ...page1.data.results,
          ...page2.data.results,
          ...page3.data.results,
          ...page4.data.results,
        ];
        return response;
      }),
    )
    .catch((error) => console.error(error));
};

const getTopRatedMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/top_rated", config)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getTopRatedMovies4 = () => {
  return axios
    .all([
      axios.get("https://api.themoviedb.org/3/movie/top_rated", config),
      axios.get("https://api.themoviedb.org/3/movie/top_rated", configPage2),
      axios.get("https://api.themoviedb.org/3/movie/top_rated", configPage3),
      axios.get("https://api.themoviedb.org/3/movie/top_rated", configPage4),
    ])
    .then(
      axios.spread((page1, page2, page3, page4) => {
        const response = [
          ...page1.data.results,
          ...page2.data.results,
          ...page3.data.results,
          ...page4.data.results,
        ];
        return response;
      }),
    )
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

const getAllFrVideos = (movie_id: number) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, config)

    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};
const getAllEnVideos = (movie_id: number) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, configLangEn)

    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export {
  getAllEnVideos,
  getAllFrVideos,
  getArtists,
  getPopularMovies,
  getPopularMovies4,
  getDetailsMovie,
  getCreditsMovie,
  getDetailsArtist,
  getCombinedCredits,
  getRecommendations,
  getTheaterMovies,
  getTheaterMovies4,
  getTopRatedMovies,
  getTopRatedMovies4,
  getSearchMovie,
  getUpcomingMovies,
  getUpcomingMovies4,
};
