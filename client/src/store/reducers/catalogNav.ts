import { createSlice } from "@reduxjs/toolkit";
import { IGenre } from "../../interfaces/genre";

 interface ICatalogNav {
  genre: IGenre | null;
  year: number | null;
  sortBy: "newest" | "popular" | "featured";
  selectedSlider: "Feature" | "Popular" | "Newest";
}

const initialState: ICatalogNav = {
  genre: null,
  year: null,
  sortBy: "newest",
  selectedSlider: "Newest",
};

const catalogNav = createSlice({
  name: "catalogNav",
  initialState,
  reducers: {
    setGenre: (state, action) => void (state.genre = action.payload),
    setYear: (state, action) => void (state.year = action.payload),
    setSortBy: (state, action) => void (state.sortBy = action.payload),
    setSelectedSlider: (state, action) =>
      void (state.selectedSlider = action.payload),
  },
});

export default catalogNav.reducer;

export const {
  setGenre,
  setYear,
  setSortBy,
  setSelectedSlider,
} = catalogNav.actions;
