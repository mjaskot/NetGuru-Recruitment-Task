require("dotenv").config();

export enum envVariables {
  PORT = "PORT",
  NODE_ENV = "NODE_ENV",
  OMDB_API_KEY = "OMDB_API_KEY",
  MONGO_URL = "MONGO_URL",
  MONGO_DB_NAME = "MONGO_DB_NAME",
  MONGO_DB_USER_PASSWORD = "MONGO_DB_USER_PASSWORD"
}

export const getEnvVariable = (variable: envVariables) => {
  const envVariable = process.env[variable];

  if (!envVariable) {
    throw new Error(`Error loading environmental variable ${variable}`);
  }

  return envVariable;
};
