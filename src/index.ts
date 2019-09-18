require("dotenv").config();

import createExpressApp from "./app";
import { logger } from "./core/Logger";
import { envVariables, getEnvVariable } from "./core/env.initializer";

const port = getEnvVariable(envVariables.PORT);
const BASE_API_PATH = "/api/v1/";

const bootstrap = async () => {
  const app = createExpressApp(BASE_API_PATH);
  try {
    app.listen(port, () =>
      logger.info(`Server is listening on port -> ${port}`)
    );
  } catch (err) {
    logger.error(err);
  }
};

bootstrap();
