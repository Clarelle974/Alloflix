//TrailerCard, Trailer, MovieCard
interface MovieDataTypes {
  movie: MovieTypes;
}

//from Movies, PopularMovies, TheaterMovies, UpcomingMovies, Search
interface MovieTypes {
  id: number;
  title: string;
  backdrop_path: string | null;
  budget: number;
  genres: { id: number; name: string }[];
  genre_ids: number[];
  media_type: string;
  original_title: string;
  origin_country: string;
  overview: string;
  poster_path: string;
  profile_path: string;
  tagline: string;
  release_date: string;
  runtime: number;
  videos: Videos;
  vote_average: number;
  release_date: string;
}

interface ResultsTypes {
  id: number;
  title: string;
  backdrop_path: string | null;
  budget: number;
  genres: { id: number; name: string }[];
  genre_ids: number[];
  media_type: string;
  original_title: string;
  origin_country: string;
  overview: string;
  poster_path: string;
  profile_path: string;
  tagline: string;
  release_date: string;
  runtime: number;
  videos: Videos;
  vote_average: number;
  release_date: string;
  birthday: string;
  biography: string;
  character: string;
  deathday: string;
  name: string;
  original_name: string;
  media_type: string;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  original_title: string;
  place_of_birth: string;
  poster_path: string;
  profile_path: string;
}
//Homepage
interface Background {
  backdrop_path: string;
}

// Artists, ArtistsDetails, ArtistDetails, MovieDetails, Filmograhy
interface ArtistTypes {
  id: number;
  birthday: string;
  biography: string;
  character: string;
  deathday: string;
  name: string;
  original_name: string;
  media_type: string;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  place_of_birth: string;
  poster_path: string;
  profile_path: string;
  original_title: string;
}

//ArtistCards
interface ArtistDataTypes {
  artist: ArtistTypes;
}
// CastingCard
interface Cardtypes {
  cast: {
    name: string;
    profile_path: string;
    id: number;
    character: string;
    poster_path: string;
  };
}

interface Videos {
  video: VideoResults[];
}
interface VideoResults {
  name: string;
  key: string;
  site: string;
  type: string;
  id: string;
}
//VideoCard
interface VideoTypes {
  video: {
    name: string;
    key: string;
    site: string;
    type: string;
    id: string;
  };
}
