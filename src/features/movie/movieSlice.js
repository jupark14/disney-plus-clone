import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

//action을 쓸 수 있도록 밖으로 보내는 역할
export const { setMovies } = movieSlice.actions;

//state를 쓸 수 있게 밖으로 보내는 역할
export const selectMovies = (state) => state.movie.movies;

//reducer는 store에게 reducer가 있다고 전하기 위해 밖으로 보냄
export default movieSlice.reducer;
