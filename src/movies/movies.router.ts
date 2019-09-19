import { Router } from "express";

import { addMovie, fetchMovies } from "./movies.controller";
import { logRoutersPaths } from "../_helpers/logger/logRouterRoutes";
import { createAddMovieValidator } from "./validators/addMovie.validator";

export const createMoviesRouter = (): Router => {
  const moviesRouter = Router();

  moviesRouter.get("/", fetchMovies);
  moviesRouter.post("/", createAddMovieValidator(), addMovie);

  logRoutersPaths(moviesRouter, "movies");

  return moviesRouter;
};
