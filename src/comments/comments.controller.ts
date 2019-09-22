import { Request, Response, NextFunction } from "express";
import {
  addComment,
  getComment,
  modifyComment,
  removeComment,
  getComments
} from "./comments.service";

export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { movieId, userId, message } = req.body;
    const data = await addComment(movieId, userId, message);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

export const retrieveComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { commentId } = req.params;
    const data = await getComment(commentId);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

export const updateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { commentId } = req.params;
    const { message } = req.body;
    const data = await modifyComment(commentId, message);

    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { commentId } = req.params;
    const data = await removeComment(commentId);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

export const getAllComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { movieId, userId } = req.query;
    const data = await getComments(movieId, userId);
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};
