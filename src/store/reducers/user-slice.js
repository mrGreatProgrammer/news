import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  currentUser: null,
  isAuth: false,
  error: '',
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
      
  }
});
