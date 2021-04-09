import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";
import { IGenre } from "../../interfaces/genre";
const fetchGenres = async () => {
    const { data } = await axios.get<IGenre[]>("/movies/contents/genres?_lang=en&per-page=100");
    return data;
}

export const GenreMap = () => {
    const genres = useQuery<IGenre[]>('genres', fetchGenres, {
    });
    //  if (genres.data?.length == 59) {
    let initial = genres.data;
    let GenreMap = {};
    if (initial) {
        for (let item of initial) {
            GenreMap[item.title] = item.id;
        }
        return GenreMap;
    }
    //   }
    return {};
}