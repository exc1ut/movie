import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IProgress extends Document {
  movie_id: number;
  user_id:ObjectId;
  progress:number;
}

const ProgressSchema: Schema = new Schema({
  movie_id: { type: Number, required: true },
  progress: { type: Number, default: 0 },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<IProgress>("Progress", ProgressSchema);
