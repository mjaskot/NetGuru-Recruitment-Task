import { celebrate, Joi } from "celebrate";

export const createUpdateCommentValidator = () =>
  celebrate({
    body: Joi.object()
      .keys({
        message: Joi.string()
          .required()
          .min(3)
          .max(255)
      })
      .required()
  });
