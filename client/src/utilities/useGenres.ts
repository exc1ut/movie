import { useQuery } from "react-query";
import { IGenre } from "../interfaces/genre";
import { fetchClient } from "./axios";

const getGenres = async () => {
  const { data } = await fetchClient.get<IGenre[]>("/movies/contents/genres");
  return data;
};

export default function useGenres() {
  return useQuery("genres", getGenres);
}
