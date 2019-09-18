import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

import { StatusError } from "./core/Errors";

const createExpressApp = (baseUrlPath: string) => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(baseUrlPath, (_req: Request, res: Response) =>
    res.status(200).json({ data: "Hello World" })
  );
  app.use(
    (err: StatusError, _req: Request, res: Response, _next: NextFunction) => {
      res.status(err.status).json({ Error: err.message });
    }
  );

  return app;
};

export default createExpressApp;
