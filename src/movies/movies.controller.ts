import { Response, NextFunction, Request } from "express";
import { getMovies } from "./movies.repository";
import { createMovieBasedOnOMDbResponse } from "./movies.service";

export const addMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Title, Year } = req.body;
    const data = await createMovieBasedOnOMDbResponse(Title, Year);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

export const fetchMovies = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json(await getMovies());
  } catch (err) {
    return next(err);
  }
};
