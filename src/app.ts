import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { errors } from "celebrate";

import { createMoviesRouter } from "./movies/movies.router";
import { createCommentsRouter } from "./comments/comments.router";
import { ErrorHandler } from "./core/error.handler";

export const createExpressApp = (baseApiPath: string) => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(`${baseApiPath}/movies`, createMoviesRouter());
  app.use(`${baseApiPath}/comments`, createCommentsRouter());
  app.use(errors());
  app.use(ErrorHandler);

  return app;
};
