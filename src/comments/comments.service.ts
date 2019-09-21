import {
  createComment,
  retrieveComment,
  deleteComment,
  getAllComments,
  updateComment
} from "./comments.repository";
import { IComment } from "./interfaces/comment.interface";

export const addComment = async (
  movieId: string,
  userId: string,
  message: string
) => {
  const comment: IComment = { movieId, userId, message };
  return createComment(comment);
};

export const getComment = async (commentId: string) => {
  return retrieveComment(commentId);
};

export const removeComment = async (commentId: string) => {
  return deleteComment(commentId);
};

export const getComments = async (movieId?: string) => {
  return getAllComments(movieId);
};

export const modifyComment = async (commentId: string, message: string) => {
  return updateComment(commentId, message);
};
