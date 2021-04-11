import { createSlice } from "@reduxjs/toolkit";

interface ICatalogNav {
  genre: string;
  year: number | null;
  sortBy: "newest" | "popular" | "featured";
}

const initialState: ICatalogNav = {
  genre: "",
  year: null,
  sortBy: "newest",
};

const catalogNav = createSlice({
  name: "catalogNav",
  initialState,
  reducers: {
    setGenre: (state, action) => (state.genre = action.payload),
    setYear: (state, action) => (state.year = action.payload),
    setSortBy: (state, action) => (state.sortBy = action.payload),
  },
});

export default catalogNav.reducer;

export const { setGenre, setYear, setSortBy } = catalogNav.actions;
