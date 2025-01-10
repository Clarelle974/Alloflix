import axios from "axios";

const options = {
  method: "GET",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.API_KEY}`,
  },
};

const getPopularMovies = () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4af27d13c2c0f2c8cd1714e402ac5add",
      options,
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export { getPopularMovies };
