import { Router } from "express";

import { addMovie, fetchMovies } from "./movies.controller";
import { logRoutersPaths } from "../_helpers/logger/logRouterRoutes";
import { createAddMovieValidator } from "./validators/addMovie.validator";

export const createMoviesRouter = (): Router => {
  const moviesRouter = Router();

  moviesRouter
    .route("/")
    .get(fetchMovies)
    .post(createAddMovieValidator(), addMovie);

  logRoutersPaths(moviesRouter);

  return moviesRouter;
};
