import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`,
  },
};

const getCategories = () => {
  return axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getCategories };
