import { CommentModel } from "./comments.model";
import { IComment } from "./interfaces/comment.interface";
import { StatusError } from "../core/error.handler";

export const createComment = async (params: IComment): Promise<IComment> => {
  return CommentModel.create(params);
};

export const retrieveComment = async (commentId: string): Promise<IComment> => {
  const comment = await CommentModel.findById(commentId).exec();
  if (!comment) {
    throw new StatusError(404, "Comment not found");
  }

  return comment;
};

export const updateComment = async (
  commentId: string,
  message: string
): Promise<IComment> => {
  const comment = await CommentModel.findOneAndUpdate(
    {
      _id: commentId
    },
    { $set: { message } }
  );

  if (!comment) {
    throw new StatusError(404, "Comment not found!");
  }

  return comment;
};

export const deleteComment = async (commentId: string): Promise<IComment> => {
  const comment = await CommentModel.findOneAndDelete({ _id: commentId });

  if (!comment) {
    throw new StatusError(404, "Comment not found!");
  }

  return comment;
};

export const getAllComments = async (
  movieId?: string,
  userId?: string
): Promise<IComment[]> => {
  if (movieId && userId) {
    return CommentModel.find({ movieId, userId })
      .lean()
      .exec();
  }

  if (movieId && !userId) {
    return CommentModel.find({ movieId })
      .lean()
      .exec();
  }

  if (!movieId && userId) {
    return CommentModel.find({ userId })
      .lean()
      .exec();
  }

  return CommentModel.find({})
    .lean()
    .exec();
};
