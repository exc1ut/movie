import { ObjectId } from "mongoose";

export interface IAddCommentDto {
  movie_id: number;
  author: ObjectId;
  body: string;
  date: Date;
}
