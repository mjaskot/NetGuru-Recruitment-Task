import { MovieModel } from "./movies.model";
import { IMovie } from "./interfaces/movie.interface";
import { StatusError } from "../core/error.handler";

export const createMovie = async (params: IMovie): Promise<IMovie> => {
  return MovieModel.create(params);
};

export const getMovies = async (): Promise<IMovie[]> => {
  return MovieModel.find({}).exec();
};

export const checkIfMovieExistsInDb = async (title: string, year: string) => {
  const foundMovie = await MovieModel.find({
    Title: title,
    Year: year
  }).exec();

  if (foundMovie.length === 1) {
    throw new StatusError(
      409,
      "Movie with such title and production year already exists in database"
    );
  }
};
