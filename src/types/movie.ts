export type Movie = {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    genres: Genre[];
    overview: string;
    poster_path: string;
    backdrop_path: string;
};

export type Genre = {
    id: number;
    name: string;
};

export type MovieCardProps = {
  movie: Movie;
};

export type ApiResponse = {
  results: Movie[];
};