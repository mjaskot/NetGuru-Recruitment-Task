import { prop, Typegoose } from "@hasezoey/typegoose";
import { getModel } from "./../core/getmodel";
import { IRating } from "./interfaces/rating.interface";
import { IMovie } from "./interfaces/movie.interface";

class MovieSchema extends Typegoose implements IMovie {
  @prop({ unique: true })
  Title: string;

  @prop()
  Year: string;

  @prop()
  Rated: string;

  @prop()
  Released: string;

  @prop()
  Runtime: string;

  @prop()
  Genre: string;

  @prop()
  Director: string;

  @prop()
  Writer: string;

  @prop()
  Actors: string;

  @prop()
  Plot: string;

  @prop()
  Language: string;

  @prop()
  Country: string;

  @prop()
  Awards: string;

  @prop()
  Poster: string;

  @prop()
  Ratings: IRating[];

  @prop()
  Metascore: string;

  @prop()
  imdbRating: string;

  @prop()
  imdbVotes: string;

  @prop()
  imdbID: string;

  @prop()
  Type: string;

  @prop()
  DVD: string;

  @prop()
  BoxOffice: string;

  @prop()
  Production: string;

  @prop()
  Website: string;

  @prop()
  Response: string;
}

export const MovieModel = getModel(new MovieSchema(), "Movies");
