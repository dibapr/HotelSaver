import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "johndoe@gmail.com",
    password: "john123",
  },
  reducers: {},
});

export default authSlice.reducer;
