import { celebrate, Joi } from "celebrate";

export const createAddMovieValidator = () =>
  celebrate({
    body: Joi.object()
      .keys({
        Title: Joi.string().required(),
        Year: Joi.string().required(),
        Rated: Joi.string(),
        Released: Joi.string(),
        Runtime: Joi.string(),
        Genre: Joi.string(),
        Director: Joi.string(),
        Writer: Joi.string(),
        Actors: Joi.string(),
        Plot: Joi.string(),
        Language: Joi.string(),
        Country: Joi.string(),
        Awards: Joi.string(),
        Poster: Joi.string(),
        Ratings: Joi.array().items(IRatingSchema),
        Metascore: Joi.string(),
        imdbRating: Joi.string(),
        imdbVotes: Joi.string(),
        imdbID: Joi.string(),
        Type: Joi.string(),
        DVD: Joi.string(),
        BoxOffice: Joi.string(),
        Production: Joi.string(),
        Website: Joi.string(),
        Response: Joi.string()
      })
      .required()
  });

const IRatingSchema = Joi.object().keys({
  Source: Joi.string(),
  Value: Joi.string()
});
