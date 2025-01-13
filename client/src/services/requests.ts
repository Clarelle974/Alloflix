import axios from "axios";

const apiKey = import.meta.env.API_KEY;
const apiToken = import.meta.env.API_TOKEN;

const optionsPopularMovies = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiToken}`,
  },
};

const getPopularMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
      optionsPopularMovies,
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export { getPopularMovies };
