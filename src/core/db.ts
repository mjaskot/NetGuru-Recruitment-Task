import { connect } from "mongoose";

import { logger } from "./logger";
import { envVariables, getEnvVariable } from "./env.initializer";

const dbUserPassword = getEnvVariable(envVariables.MONGO_DB_USER_PASSWORD);

export const createDBConnection = (
  mongoUrl: string,
  dbName: string
): Promise<Boolean> => {
  return new Promise((resolve, reject) => {
    const connectionLink = `${mongoUrl}://dbUser:${dbUserPassword}@${dbName}-7kyrp.mongodb.net/test?retryWrites=true&w=majority`;

    connect(
      connectionLink,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    )
      .then(() => {
        resolve(true);
      })
      .catch(err => {
        logger.error(`Error connecting to database! ${err.stack}`);
        reject(false);
      });
  });
};
