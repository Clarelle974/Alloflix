import axios from "axios";

const discoverOptions = {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie",
  params: {
    include_adult: "false",
    include_video: "false",
    language: "fr-FR",
    page: "1",
    region: "France",
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
  },
};
const getDiscoverMovies = () => {
  return axios
    .request(discoverOptions)
    .then((res) => {
      const discoverData = res.data.results;
      return discoverData;
    })
    .catch((err) => console.error(err));
};

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

export { getCategories, getDiscoverMovies, getPopularMovies };
