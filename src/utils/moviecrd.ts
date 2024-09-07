import { Movie } from "../types/movie";

export const dateFormater = (date: string): string => {
  const dateFormated: Date = new Date(date);
  return dateFormated.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
  });
};

export const addStorage = (movie: Movie) => {
  let storedDate: string[] = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
  if (!storedDate.includes(movie.id.toString())) {
      storedDate.push(movie.id.toString());
      window.localStorage.movies = storedDate.join(",");
  }
}

export const deleteStorage = (movie: Movie) => {
  let storedData: string[] = window.localStorage.movies.split(",");
  let newData: string[] = storedData.filter((id: string) => id != movie.id.toString());
  window.localStorage.movies = newData.join(",");
}