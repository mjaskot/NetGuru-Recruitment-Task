import { CommentModel } from "./comments.model";
import { IComment } from "./interfaces/Comment.interface";
import { StatusError } from "../core/error.handler";

export const createComment = async (params: IComment): Promise<IComment> => {
  return CommentModel.create(params);
};

export const retrieveComment = async (commentId: string): Promise<IComment> => {
  const comment = await CommentModel.findById(commentId).exec();
  console.log(comment);
  if (!comment) {
    throw new StatusError(404, "Comment not found");
  }

  return comment;
};

export const updateComment = async (
  commentId: string,
  message: string
): Promise<IComment> => {
  const toDo = await CommentModel.findOneAndUpdate(
    {
      _id: commentId
    },
    { $set: { message } }
  );

  if (!toDo) {
    throw new StatusError(404, "Comment not found!");
  }

  return toDo;
};

export const deleteComment = async (commentId: string): Promise<IComment> => {
  const comment = await CommentModel.findOneAndDelete({ _id: commentId });

  if (!comment) {
    throw new StatusError(404, "ToDo not found!");
  }

  return comment;
};

export const getAllComments = async (movieId?: string): Promise<IComment[]> => {
  return movieId
    ? CommentModel.find({ movieId }).exec()
    : CommentModel.find({}).exec();
};
