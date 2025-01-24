interface ArticleTypes {
  id: number;
  media_type: string;
  original_title: string;
  poster_path: string;
  profile_path: string;
  popularity: number;
  backdrop_path: string | null;
}

//from Movies, PopularMovies, TheaterMovies, UpcomingMovies, Search
interface MovieTypes extends ArticleTypes {
  title: string;
  budget: number;
  genres: { id: number; name: string }[];
  genre_ids: number[];
  origin_country: string;
  overview: string;
  tagline: string;
  release_date: string;
  runtime: number;
  videos: Videos;
  vote_average: number;
  release_date: string;
}
//TrailerCard, Trailer, MovieCard
interface MovieDataTypes {
  movie: MovieTypes;
}
interface ResultsTypes extends MovieTypes {
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
  adult: boolean;
  gender: number;
  known_for_department: string;
  place_of_birth: string;
}

//Homepage
interface Background {
  backdrop_path: string;
}

// Artists, ArtistsDetails, ArtistDetails, MovieDetails, Filmograhy
interface ArtistTypes extends ArticleTypes {
  birthday: string;
  biography: string;
  character: string;
  deathday: string;
  name: string;
  original_name: string;
  adult: boolean;
  gender: number;
  known_for_department: string;
  place_of_birth: string;
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
