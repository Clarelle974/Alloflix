import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.API_KEY}`,
  },
};

const getCategories = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export { getCategories };
