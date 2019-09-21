import { connect } from "mongoose";
import { logger } from "./logger";

export const createDBConnection = (
  mongoUrl: string,
  dbName: string
): Promise<Boolean> => {
  return new Promise((resolve, reject) => {
    const connectionLink = `mongodb://${mongoUrl}:27017/${dbName}`;

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
        logger.info("Database Connected!");
        resolve(true);
      })
      .catch(err => {
        logger.error(`Error connecting to database! ${err.stack}`);
        reject(err);
      });
  });
};
