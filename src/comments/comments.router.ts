import { Router } from "express";

import {
  createComment,
  deleteComment,
  getAllComments,
  retrieveComment,
  updateComment
} from "./comments.controller";
import { createAddCommentValidator } from "./validators/addCommentValidator";
import { createUpdateCommentValidator } from "./validators/updadeComment.validator";
import { logRoutersPaths } from "../_helpers/logger/logRouterRoutes";

export const createCommentsRouter = () => {
  const commentsRouter = Router();

  commentsRouter.get("/", getAllComments);
  commentsRouter.post("/", createAddCommentValidator(), createComment);

  commentsRouter.get("/:commentId", retrieveComment);
  commentsRouter.put(
    "/:commentId",
    createUpdateCommentValidator(),
    updateComment
  );
  commentsRouter.delete("/:commentId", deleteComment);

  logRoutersPaths(commentsRouter, "comments");

  return commentsRouter;
};
