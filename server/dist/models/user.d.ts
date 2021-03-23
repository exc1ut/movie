import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
    email: string;
    username: string;
    password: string;
}
declare const _default: mongoose.Model<IUser>;
export default _default;
