import { Grid, Select } from '@material-ui/core'
import Filters from '../components/Filters/Filters'
//import Pagination from "../components/Filters/pagination"
import Pagination from '@material-ui/lab/Pagination';
import react, { useCallback } from 'react'
import { useAppSelector, AppState } from '../store/store'
import { useQuery } from 'react-query'
import axios from "axios"
import { IContent } from '../interfaces/IContent'
import { GenreMap } from '../components/Filters/Maps'
import React, { useEffect } from 'react'
import MovieList from "../components/Filters/MovieList"
import { match } from 'node:assert'
import { useDispatch } from 'react-redux'
import { PaginationItem } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core"
import catalogNav, { setContetntType, setCurrentPage, setPageCount } from '../store/reducers/catalogNav';
import { useHistory } from 'react-router';

interface Props {
  content_type: number
}
interface QueryObj { }
const useStyles = makeStyles({
  root: {
    margin: "20px",
    marginLeft: "30px",
    '& .Mui-selected': {
      backgroundColor: '#002277',
      color: 'white',

    },
  },
  items: {
    width: "40px",
    height: "40px",
    color: "white",
    borderColor: "white",
    background: "transparent",
    '&:hover': {
      backgroundColor: "#112244"
    }
  }
})

export const FilterPage: React.FC<Props> = ({ content_type }) => {
  const classes = useStyles();
  const history = useHistory();
  const filters = useAppSelector((state: AppState) => {
    return state;
  })

  const { genreId, year, sortBy, selectedSlider, quality, language, currentPage, contentType, sort } = filters.catalogNav;
  const dispatch = useDispatch();
  let queryMovies = useQuery(["movies", language, currentPage, sort, genreId, quality, contentType], () => fetchFiltredMovies(language, currentPage, sort, genreId, quality, contentType));
  useEffect(() => {
    dispatch(setContetntType(content_type));
    console.log("USE EFFECT FOR CONTENT_TYPE");
  }, [content_type])
  const fetchFiltredMovies = async (language: number | null, page: number, sort: string, derivedGenre: number | null, quality: number | null, ctype: number | null) => {

    let queryParams: any = { "and": [{ "content_type": { "in": [ctype] } }] }
    let queryObj: any = {};

    if (language != null) {
      queryParams.and.push({ "lang_id": { "in": [language] } })
    }
    if (quality != null) {
      queryParams.and.push({ "video_quality": { "in": [quality] } })

    }
    if (derivedGenre != null) {
      queryParams.and.push({ "genre_id": { "in": [derivedGenre] } })
    }
    let formattedFilter = JSON.stringify(queryParams);
    console.log(formattedFilter);
    const response = await axios.get
      (`/movies/contents?paginate&_lang=en&page=${page}&per-page=18&filter=${formattedFilter}&sort=${sort}`);
    console.log(response);

    return response;
  }




  const handlePagination = useCallback((event, page) => {
    dispatch(setCurrentPage(page));
    page = filters.catalogNav.currentPage;
  }, [currentPage])
  useEffect(() => {
    if (queryMovies.data?.data.meta.pageCount) {
      dispatch(setPageCount(queryMovies.data?.data.meta.pageCount));
    }
  }, [queryMovies.data?.data.meta.pageCount]);
  console.log(queryMovies);

  return (
    <div>
      <Filters ctype={content_type} />
      <Pagination
        page={filters.catalogNav.currentPage}
        className={classes.root}
        hidePrevButton={filters.catalogNav.currentPage == 1 ? true : false}
        onChange={handlePagination}
        renderItem={(item) => <PaginationItem {...item}
          className={classes.items} />}
        count={filters.catalogNav.pageCount} variant="outlined" shape="rounded" />
      <MovieList movies={queryMovies.data?.data.response} />
    </div>
  )
}