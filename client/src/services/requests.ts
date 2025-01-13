import axios from "axios";

// const options = {
//   method: "GET",
//   url: process.env.BASE_URL,
//   headers: {
//     accept: "application/json",
//     Authorization: process.env.API_KEY,
//   },
// };

// const getTrailer = () => {
//   options.url += "/movie/543/videos";
//   return axios
//     .request(options)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.error(err));
// };
// const baseUrl = import.meta.env.BASE_URL;

// const trailersOptions = {
//   method: "GET",
//   // url: "https://api.themoviedb.org/3/movie/123/videos",
//   params: { language: "fr-FR" },
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${import.meta.env.API_KEY}`,
//   },
// };
// // const apikeyCL = import.meta.env.MY_KEY;
// const getTrailer = () => {
//   return (
//     axios
//       // .get("https://api.themoviedb.org/3/movie/123/videos", options)
//       // https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}
//       .get(
//         "https://api.themoviedb.org/3/movie/123/videos?api_key=a5abf82a28ef3a5366bcbb0d3f00dffa",
//         trailersOptions,
//       )
//       .then((res) => {
//         const trailersData = res.data;
//         return trailersData;
//       })
//       .catch((err) => console.error(err))
//   );
// };

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
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWFiZjgyYTI4ZWYzYTUzNjZiY2JiMGQzZjAwZGZmYSIsIm5iZiI6MTczNjM0MzMxNi4wNTIsInN1YiI6IjY3N2U3ZjE0Mzg4MWM3OTQxOWJiMTMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFl-_q6Yb0Znq_mpiGMVve0iUnCAJ-Z7Uo4xpWd4x-4",
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

// export { getTrailer, getDiscoverMovies };
export { getDiscoverMovies };
