type TCountries = Array<{ ['countries']: 'string'}>
type TGenres = Array<{ ['genre']: 'string'}>

export type TPopularFilm = {
  filmId: number;
  nameRu: string;
  nameEn: null | string;
  year: string;
  filmLength: null | number;
  countries: TCountries;
  genres: TGenres;
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: null | number;
}

export type TPremier = {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string | null;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: TCountries;
  genres: TGenres;
  duration: number;
  premiereRu: string;
}