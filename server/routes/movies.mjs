import express from "express";
import movies from "../utils/axios.mjs";

const router = express.Router();

const encodeQuery = (query) => {
  const encodedQuery = Object.keys(query)
    .map((item) => {
      return `${item}=${query[item]}`;
    })
    .join("&");
  return encodedQuery;
};

/*
  Get all recent news
  Public
  @type: Get
  @route: /movies/contents
*/
router.get("/contents", (req, res, next) => {
  console.log(req.query);

  const query =
    "?" +
    Object.keys(req.query)
      .map((key) => {
        return `${key}=${req.query[key]}`;
      })
      .join("&");

  console.log("query" + encodeURI(query));

  movies.get(`/contents${query}`).then((result) => {
    console.log("result: " + result.data);
    res.status(200).json(result.data.data);
  });
});

/*
  Get all recent news
  Public
  @type: Get
  @route: /movies/contents/genres
*/

router.get(`/contents/genres`, (req, res, next) => {
  const query = req.query;
  const encodedQuery = encodeQuery(query);
  movies
    .get(`/contents/genres?${encodedQuery}`)
    .then((result) => {
      // res.status(200).json(result.data);

      return Array.from(result.data.data);
    })
    .then((data) => {
      data.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      return res.status(200).json(data);
    });
});

export default router;
