import { celebrate, Joi } from "celebrate";

export const createAddCommentValidator = () =>
  celebrate({
    body: Joi.object()
      .keys({
        movieId: Joi.string().required(),
        userId: Joi.string().required(),
        message: Joi.string()
          .required()
          .min(3)
          .max(255)
      })
      .required()
  });
