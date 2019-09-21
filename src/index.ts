require("dotenv").config();

import { createExpressApp } from "./app";
import { logger } from "./core/logger";
import { envVariables, getEnvVariable } from "./core/env.initializer";
import { createDBConnection } from "./core/db";

export const BASE_API_PATH = "/api/v1";
const port = getEnvVariable(envVariables.PORT);
const mongoUrl = getEnvVariable(envVariables.MONGO_URL);
const dbName = getEnvVariable(envVariables.MONGO_DB_NAME);

const bootstrap = async () => {
  const app = createExpressApp(BASE_API_PATH);
  try {
    if (await createDBConnection(mongoUrl, dbName)) {
      logger.info("Database connected!");
    }
    app.listen(port, () =>
      logger.info(`Server is listening on port -> ${port}`)
    );
  } catch (err) {
    logger.error(err);
  }
};

bootstrap();
