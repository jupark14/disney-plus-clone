import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    //   state는 initialState의 state를 지칭함. export시 state랑 다름. export시 state는 글로벌한 state를 가르킴
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

//action을 쓸 수 있도록 밖으로 보내는 역할. createSlice를 쓰면 action함수를 자동으로 생성해주고, reducer에서 지었던 setUserLogin, setSignOut로 내보낼 수 있다는 것
export const { setUserLogin, setSignOut } = userSlice.actions;

//initialState에 movies도 있고 fantasticMovies도 있다고 치면 그 중에서 movies를 가져오는 것을 편하게 하기 위해서 씀
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

//reducer는 store에게 reducer가 있다고 전하기 위해 밖으로 보냄
export default userSlice.reducer;
