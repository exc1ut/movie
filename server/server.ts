import express from "express";
import morgan from "morgan";
import movieRouter from "./routes/movies";
import cors from "cors";
import path from "path";
import { AuthRouter } from "./routes/auth";
import { connect } from "mongoose";
import { config } from "dotenv";
import { CommentRouter } from "./routes/comments";
import "./auth.ts";
import { ProgressRouter } from "./routes/progress";

//Loading configs to process.env
config();

//Initializing the app
const app = express();

//Constants
const port = process.env.PORT || 9000;

// DB connection
connect(process.env.DB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use("/movies", movieRouter);
app.use("/auth", AuthRouter);
app.use(
  "/comments",
  CommentRouter
);
app.use(
  "/progress",
  ProgressRouter
);
//Serving static files

app.use(express.static("../client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "client", "build", "index.html"));
});

//Error handlers
app.use((req, res, next) => {
  const error = new Error("Not Found");
  next(error);
});

// app.use((req, res) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

app.listen(port, () =>
  console.log(`This application was started: http://localhost:${port}`)
);
