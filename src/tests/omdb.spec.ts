import { describe, it } from "mocha";
import { assert } from "chai";

import { getOMDbUrl, fetchMovieFromOMDb } from "../_helpers/omdb";
import { envVariables, getEnvVariable } from "./../core/env.initializer";

describe("OMDb helper functions", () => {
  it("Should make valid OMDb request ULR", () => {
    const omdbApiKey = getEnvVariable(envVariables.OMDB_API_KEY);

    assert.typeOf(getOMDbUrl(), "string");
    assert.equal(getOMDbUrl(), `https://www.omdbapi.com/?apikey=${omdbApiKey}`);
  });

  it("Should sucessfuly fetch Batman movie from OMDb", async () => {
    const movie = await fetchMovieFromOMDb("The Dark Knight", "2008");

    assert.equal(movie.Title, "The Dark Knight");
    assert.equal(movie.Year, "2008");
    assert.equal(movie.Director, "Christopher Nolan");
  });
});
