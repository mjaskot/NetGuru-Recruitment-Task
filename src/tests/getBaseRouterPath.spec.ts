import { describe, it } from "mocha";
import { assert } from "chai";

import { getBaseRouterPath } from "../_helpers/getBaseRouterPath";
import { BASE_API_PATH } from "../index";

describe("Router paths", () => {
  it("Should build valid router path", () => {
    assert.equal(getBaseRouterPath("movies"), `${BASE_API_PATH}/movies`);
  });
});
