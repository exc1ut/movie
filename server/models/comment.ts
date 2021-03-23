import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IComment extends Document {
  movie_id: number;
  author: ObjectId;
  body: string;
  date: Date;
  likes: [ObjectId];
  dislikes: [ObjectId];
}

const CommentSchema: Schema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  movie_id: { type: Number, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model<IComment>("Comment", CommentSchema);
