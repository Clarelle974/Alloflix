import axios from "axios";

const options = {
  method: "GET",
  url: import.meta.env.BASE_URL,
  params: { language: "en-FR", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.API_KEY,
  },
};

const getPopularMovies = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export { getPopularMovies };
