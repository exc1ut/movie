import axios from "axios";
import { useQuery } from "react-query";
import { IContent } from "../interfaces/content";

const getTeasers = async () => {
  const { data } = await axios.get<IContent[]>(
    "/movies/contents?paginate&_lang=en&page=1&per-page=5&sort=-recent"
  );
  return data;
};

export default function useTeaser() {
  return useQuery("teasers", getTeasers);
}
