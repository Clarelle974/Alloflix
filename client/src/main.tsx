// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component

import App from "./App";
import ArtistDetails from "./pages/ArtistDetails";
import Artists from "./pages/Artists";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import Page404 from "./pages/Page404";
import Search from "./pages/Search";

// Import additional components for new routes
// Try creating these components in the "pages" folder
import {
  getArtists,
  getCombinedCredits,
  getCreditsMovie,
  getDetailsArtist,
  getDetailsMovie,
  getPopularMovies,
  getRecommendations,
  getSearchMovie,
  getTheaterMovies,
  getTopRatedMovies,
  getTopRatedMovies2,
  getTopRatedMovies3,
  getTopRatedMovies4,
  getUpcomingMovies,
} from "./services/requests";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Page404 />,
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
          theater: await getTheaterMovies(),
          toprated: await getTopRatedMovies(),
          popular: await getPopularMovies(),

          toprated2: await getTopRatedMovies2(),
          toprated3: await getTopRatedMovies3(),
          toprated4: await getTopRatedMovies4(),
          upcoming: await getUpcomingMovies(),
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

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
