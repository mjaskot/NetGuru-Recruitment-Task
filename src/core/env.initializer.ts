require("dotenv").config();

export enum envVariables {
  PORT = "PORT",
  NODE_ENV = "NODE_ENV"
}

export const getEnvVariable = (variable: envVariables) => {
  const envVariable = process.env[variable];

  if (!envVariable) {
    throw new Error(`Error loading environmental variable ${variable}`);
  }

  return envVariable;
};
