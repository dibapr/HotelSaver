import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "johndoe@gmail.com",
  password: "john123",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      return (state = {
        ...state,
        isLoggedIn: true,
      });
    },
    logout: (state) => {
      return (state = {
        ...state,
        isLoggedIn: false,
      });
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
