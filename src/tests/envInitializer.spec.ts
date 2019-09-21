import { describe, it } from "mocha";
import { assert } from "chai";

import { envVariables, getEnvVariable } from "./../core/env.initializer";

describe("Env initializer", () => {
  it("Should get all env variables", () => {
    assert.typeOf(getEnvVariable(envVariables.PORT), "string");
    assert.typeOf(getEnvVariable(envVariables.MONGO_DB_NAME), "string");
    assert.typeOf(getEnvVariable(envVariables.MONGO_URL), "string");
    assert.typeOf(getEnvVariable(envVariables.OMDB_API_KEY), "string");
    assert.typeOf(getEnvVariable(envVariables.NODE_ENV), "string");
  });
});
