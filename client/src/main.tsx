import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import ArtistDetails from "./pages/ArtistDetails";
import Artists from "./pages/Artists";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import Page404 from "./pages/Page404";
import Search from "./pages/Search";

import {
  getAllEnVideos,
  getAllFrVideos,
  getArtists,
  getCombinedCredits,
  getCreditsMovie,
  getDetailsArtist,
  getDetailsMovie,
  getPopularMovies,
  getPopularMovies4,
  getRecommendations,
  getSearchMovie,
  getTheaterMovies,
  getTheaterMovies4,
  getTopRatedMovies4,
  getUpcomingMovies,
  getUpcomingMovies4,
} from "./services/requests";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Page404 />,
    loader: getPopularMovies,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: async () => ({
          popular: await getPopularMovies(),
          theater: await getTheaterMovies(),
          upcoming: await getUpcomingMovies(),
        }),
      },

      {
        path: "/movies/:type",
        element: <Movies />,
        loader: async () => ({
          theater: await getTheaterMovies4(),
          popular: await getPopularMovies4(),
          toprated: await getTopRatedMovies4(),
          upcoming: await getUpcomingMovies4(),
        }),
      },
      {
        path: "/search/:userSearch",
        element: <Search />,
        loader: ({ params }) => getSearchMovie(String(params.userSearch)),
      },

      {
        path: "/artists/:type",
        element: <Artists />,
        loader: getArtists,
      },

      {
        path: "/moviedetails/:movie_id",
        element: <MovieDetails />,
        loader: async ({ params }) => ({
          cast: await getCreditsMovie(Number(params.movie_id)),
          details: await getDetailsMovie(Number(params.movie_id)),
          recommendations: await getRecommendations(Number(params.movie_id)),
          allFrVideos: await getAllFrVideos(Number(params.movie_id)),
          allEnVideos: await getAllEnVideos(Number(params.movie_id)),
        }),
      },
      {
        path: "/artistdetails/:person_id",
        element: <ArtistDetails />,
        loader: async ({ params }) => ({
          data: await getDetailsArtist(Number(params.person_id)),
          credits: await getCombinedCredits(Number(params.person_id)),
        }),
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
