import express, { request } from "express";
import movies from "../utils/axios";

const router = express.Router();

<<<<<<< HEAD:server/routes/movies.mjs
const encodeQuery = (query) => {
	const encodedQuery = Object.keys(query)
		.map((item) => {
			return `${item}=${query[item]}`;
		})
		.join("&");
	return encodedQuery;
=======
const encodeQuery = (query: any) => {
  const encodedQuery = Object.keys(query)
    .map((item) => {
      return `${item}=${query[item]}`;
    })
    .join("&");
  return encodedQuery;
>>>>>>> 38701b3efca6d2168fde74814519e26148b0383d:server/routes/movies.ts
};

/*
  Get all recent news
  Public
  @type: Get
  @route: /movies/contents
*/
<<<<<<< HEAD:server/routes/movies.mjs
router.get("/contents", (req, res, next) => {
	console.log(req.query);
=======

router.get("/contents", (req, res) => {
  console.log(req.query);
>>>>>>> 38701b3efca6d2168fde74814519e26148b0383d:server/routes/movies.ts

	const query =
		"?" +
		Object.keys(req.query)
			.map((key) => {
				return `${key}=${req.query[key]}`;
			})
			.join("&");

	console.log("query" + encodeURI(query));

	movies
		.get(`/contents${query}`)
		.then((result) => {
			console.log("result: " + JSON.stringify(result.data));
			res.status(200).json(result.data.data);
		})
		.catch((err) => {
			res.send(err);
		});
});

/*
  Get all recent news
  Public
  @type: Get
  @route: /movies/contents/genres
*/

<<<<<<< HEAD:server/routes/movies.mjs
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
=======
router.get(`/contents/genres`, (req, res) => {
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
        // @ts-ignore
        if (a.id > b.id) {
          return 1;
          // @ts-ignore
        } else if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      return res.status(200).json(data);
    });
>>>>>>> 38701b3efca6d2168fde74814519e26148b0383d:server/routes/movies.ts
});

export default router;
