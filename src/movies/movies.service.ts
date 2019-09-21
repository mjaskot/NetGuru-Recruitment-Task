import { fetchMovieFromOMDb } from "./../_helpers/omdb";
import * as MoviesRepository from "./movies.repository";

export const createMovieBasedOnOMDbResponse = async (
  title: string,
  year: string
) => {
  await MoviesRepository.checkIfMovieExistsInDb(title, year);
  const fetchedMovie = await fetchMovieFromOMDb(title, year);
  return MoviesRepository.createMovie(fetchedMovie);
};

export const getMovies = async () => {
  return MoviesRepository.getMovies();
};
