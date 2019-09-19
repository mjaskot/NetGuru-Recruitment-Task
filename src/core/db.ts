import { connect } from "mongoose";

export const createDBConnection = (
  mongoUrl: string,
  dbName: string
): Promise<Boolean> => {
  return new Promise((resolve, reject) => {
    const connectionLink = `mongodb://${mongoUrl}:27017/${dbName}`;

    connect(
      connectionLink,
      { useNewUrlParser: true, useUnifiedTopology: true },
      err => {
        if (err) {
          reject(err);
        }
        console.log("Database connected!");
        resolve(true);
      }
    );
  });
};
