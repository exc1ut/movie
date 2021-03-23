import { ObjectId } from 'mongoose';
export interface IUpdateProgress {
    movie_id: number;
    user_id:ObjectId;
    progress:number;
  }