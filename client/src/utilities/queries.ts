import axios from "axios";
import { IContent } from "../interfaces/IContent";

export const fetchTeasers = () => {
  return axios.get<IContent[]>(
    "/movies/contents?paginate&_lang=en&page=1&per-page=5&sort=-recent",
    {
      headers: {
        Accept: "application/xhtml+xml",
      },
    }
  );
};

<<<<<<< HEAD
export const fetchPopular = ({ pageParam = 0 }) => {
  return axios.get<IContent[]>(
    `/movies/contents?paginate&_lang=en&page=${pageParam}&per-page=18&sort=-top`,
    {
      headers: {
        Accept: "application/xhtml+xml",
      },
    }
  );
=======
export const fetchPopular = async ({ pageParam = 0 }) => {
  const data = await axios.get<IContent[]>(
    `/movies/contents?paginate&_lang=en&page=${pageParam}&per-page=18&sort=-top`
  );
  return data
  
>>>>>>> 245b1c9da88e39f4b42c3255a1fb9d7c20d1abf7
};
