import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { IContent } from "../interfaces/IContent";

const fetchPopular = async ({ pageParam = 0 }) => {
 const data = await axios.get<IContent[]>(
        `/movies/contents?paginate&_lang=en&page=${pageParam}&per-page=18&sort=-top`
      );
  return data
};

export default function usePopular() {
  return useInfiniteQuery("popular", fetchPopular, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup.data?.length === 18;
      if (!morePagesExist) return false;
      return allGroups.length + 1;
    },
  });
}