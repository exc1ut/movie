import bcrypt from "bcrypt";
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  isValidPassword(passport: string): boolean;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (this: IUser, next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (this, password: string) {
  const user = this as IUser;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

export default mongoose.model<IUser>("User", UserSchema);
