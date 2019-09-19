import { Typegoose, prop } from "@hasezoey/typegoose";
import { ObjectId } from "bson";

import { getModel } from "./../core/getmodel";

class CommentSchema extends Typegoose {
  @prop({ required: true })
  movieId: ObjectId;

  @prop({ required: true })
  userId: string;

  @prop({ required: true })
  message: string;
}

export const CommentModel = getModel(new CommentSchema(), "Comments");
