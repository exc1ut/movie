import axios from "axios";
import { useQuery } from "react-query";
import { IGenre } from "../interfaces/genre";

const getGenres = async () => {
  const { data } = await axios.get<IGenre[]>("/movies/contents/genres");
  return data;
};

export default function useGenres() {
  return useQuery("genres", getGenres);
}
