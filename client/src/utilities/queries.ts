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

export const fetchPopular = async ({ pageParam = 0 }) => {
  const data = await axios.get<IContent[]>(
    `/movies/contents?paginate&_lang=en&page=${pageParam}&per-page=18&sort=-top`
  );
  return data
  
};
