import axios from "axios";

import { getEnvVariable, envVariables } from "../core/env.initializer";

const getOMDbUrl = (): string => {
  return `https://www.omdbapi.com/?apikey=${getEnvVariable(
    envVariables.OMDB_API_KEY
  )}`;
};

export const fetchMovieFromOMDb = async (title: string, year: string) => {
  const apiURL = getOMDbUrl();

  try {
    const response = await axios.post(`${apiURL}&t=${title}&y=${year}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
