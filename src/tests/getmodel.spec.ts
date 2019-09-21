import { describe, it } from "mocha";
import { assert } from "chai";

import { getModel } from "../core/getmodel";
import { CommentSchema } from "../comments/comments.model";

describe("Get model functionality", () => {
  it("Should get a Typegoose model", () => {
    const commentModel = getModel(new CommentSchema(), "comments");
    assert.isNotNull(commentModel);
  });
});
