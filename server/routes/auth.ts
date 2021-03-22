import { ISignUpDto } from "../dto/signup.dto";
import { Router } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import { ILoginDto } from "../dto/login.dto";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/register", async (req, res) => {
  const user: ISignUpDto = req.body;

  const model = new User(user);

  try {
    const data = await model.save();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const user: ILoginDto = req.body;
  try {
    const model = await User.findOne({ email: user.email });

    if (!model) res.status(401).json({ message: "Wrong credentials" });

    const validate = await model?.isValidPassword(user.password);

    if (!validate) res.status(401).json({ message: "Wrong credentials" });
    const token = jwt.sign({ user: model }, process.env.JWT_SECRET_KEY!);

    res.json({ token });
  } catch (error) {}
});

export const AuthRouter = router;
