import axios from "axios";
import { IResponse,IContent } from "../interfaces/IContent";


export const fetchTeasers =  async () => {
 const data = await axios.get(
    "/movies/contents?paginate&_lang=en&page=1&per-page=5&sort=-recent",
    // {
    //   headers: {
    //     Accept: "application/xhtml+xml",
    //   },
    // }
  )
  console.log("Fetched teaser" + data.data);
  return data.data;
};

export const fetchPopular = async ({ pageParam = 0 }) => {
  const data = await axios.get(
    `/movies/contents?paginate&_lang=en&page=${pageParam}&per-page=18&sort=-top`
  );
  console.log("pages : " + data.data);
  return data.data
  
};
