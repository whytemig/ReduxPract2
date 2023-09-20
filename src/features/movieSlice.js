import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import URL from "../components/api/movieapi";
import { apiKey } from "../components/api/movieapiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "spiderman";
    try {
      const response = await URL.get(
        `?apiKey=${apiKey}&s=${movieText}&type=movie`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "seinfeld";
    try {
      const response = await URL.get(
        `?apiKey=${apiKey}&s=${seriesText}&type=series`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
    movies: {},
    shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("FullFilled");
      return { ...state, movies: payload };
      },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Shows FullFilled");
      return { ...state, shows: payload };
      },
    
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
