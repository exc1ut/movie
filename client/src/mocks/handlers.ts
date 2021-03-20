import { rest } from "msw";
import json from "./genres.json";

export const handlers = [
  // Capture a GET /user/:userId request,
  rest.get("/movies/contents/genres", (req, res, ctx) => {
    // ...and respond with this mocked response.
    console.log(json);
    return res(ctx.json(json));
  }),
];
