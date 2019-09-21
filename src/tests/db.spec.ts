import { describe, it } from "mocha";
import { assert } from "chai";

import { createDBConnection } from "../core/db";

describe("Database connection", () => {
  it("Should connect to database and resolve to true", async () => {
    assert.equal(
      await createDBConnection(`localhost:27017`, `NetGuruTask`),
      true
    );
  });
});
