import { createSlice } from "@reduxjs/toolkit";
import { visitNode } from "typescript";
import { IGenre } from "../../interfaces/genre";

 interface ICatalogNav {
  genre: IGenre | null;
  year: number | null;
  sortBy: "newest" | "popular" | "featured";
  selectedSlider: "Feature" | "Popular" | "Newest";
  quality : number|null;
  language: number|null;
  currentPage: number,
  contentType:number|null,
  sort:string,
  genreId:number|null,
  pageCount : number,
  authorArray : string[]
}

const initialState: ICatalogNav = {
  genre: null,
  year: null,
  sortBy: "newest",
  selectedSlider: "Newest",
  quality: null,
  language:null,
  currentPage : 1,
  contentType : 1,
  sort: "top",
  genreId: null,
  pageCount:10,
  authorArray:[]
};

const catalogNav = createSlice({
  name: "catalogNav",
  initialState,
  reducers: {
    setGenre: (state, action) => void (state.genre = action.payload),
    setYear: (state, action) => void (state.year = action.payload),
    setSortBy: (state, action) => void (state.sortBy = action.payload),
    setSelectedSlider: (state, action) => void (state.selectedSlider = action.payload),
    setQuality: (state, action) => void (state.quality = action.payload),
    setLanguage: (state,action) => void(state.language =action.payload),
    setCurrentPage: (state,action) => void(state.currentPage = action.payload),
    setContetntType : (state,action) => void(state.contentType = action.payload),
    setSort: (state,action)=> void(state.sort = action.payload),
    setGenreID:(state,action) =>void(state.genreId = action.payload),
    setPageCount:(state,action) => void(state.pageCount = action.payload) ,
    setArrayAuthor: (state,action) => void(state.authorArray = [...state.authorArray, action.payload]),
  },
});

export default catalogNav.reducer;

export const {
  setGenre,
  setYear,
  setSortBy,
  setSelectedSlider,
  setLanguage,
  setQuality,
  setCurrentPage,
  setContetntType,
  setSort,
  setGenreID,
  setPageCount,
  setArrayAuthor
} = catalogNav.actions;
