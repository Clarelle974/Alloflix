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

export { getDiscoverMovies };
