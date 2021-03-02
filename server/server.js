import express from "express";
import morgan from "morgan";
import movieRouter from "./routes/movies.mjs";
import cors from "cors";

//Initializing the app
const app = express();

//Constants
const port = process.env.PORT || 9000;

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use("/movies", movieRouter);

//Serving static files

app.use(express.static("../client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "client", "build", "index.html"));
});

//Error handlers
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () =>
  console.log(`This application was started: http://localhost:/${port}`)
);
