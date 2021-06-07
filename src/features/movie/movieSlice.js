import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

//action을 쓸 수 있도록 밖으로 보내는 역할. createSlice를 쓰면 action함수를 자동으로 생성해주고, reducer에서 지었던 setMovies로 내보낼 수 있다는 것
export const { setMovies } = movieSlice.actions;

//initialState에 movies도 있고 fantasticMovies도 있다고 치면 그 중에서 movies를 가져오는 것을 편하게 하기 위해서 씀
export const selectMovies = (state) => state.movie.movies;

//reducer는 store에게 reducer가 있다고 전하기 위해 밖으로 보냄
export default movieSlice.reducer;
