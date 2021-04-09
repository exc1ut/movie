import { Grid, Select } from '@material-ui/core'
import Filters from '../components/Filters/Filters'
import Pagination from "../components/Filters/pagination"
import react from 'react'
import { useAppSelector, AppState } from '../store/store'
import { useQuery } from 'react-query'
import axios from "axios"
import { IContent } from '../interfaces/IContent'
import { GenreMap } from '../components/Filters/Maps'
interface Props { }



export const FilterPage: React.FC<Props> = () => {
  const fetchFiltredMovies = async (language: number, page: number, sort: string, derivedGenre: number, quality: number, ctype: number = 1) => {
    const response = await axios.get(`/movies/contents?paginate&_lang=en&page=${page}&per-page=18&filter={"and":[{"content_type":{"in":[${ctype}]}},{"genre_id":{"in":[${derivedGenre}]}},{"video_quality":{"in":[${quality}]}},{"lang_id":{"in":[${language}]}}]}&sort=${sort}`);

    return response;
  }
  const filters = useAppSelector((state: AppState) => {
    return state;
  })

  const { genreId, year, sortBy, selectedSlider, quality, language, currentPage, contentType, sort } = filters.catalogNav;

  const queryMovies = useQuery(["movies", language, currentPage, sort, genreId, quality], () => fetchFiltredMovies(language, currentPage, sort, genreId, quality));


  const pageCount = 30;
  console.log(queryMovies);
  return (
    <div>
      <Filters />
      <Pagination pageCount={pageCount} />

    </div>
  )
}