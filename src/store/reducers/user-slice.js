import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, chooseRoles } from "./user-actions";


let initialState = {
  currentUser: null,
  isAuth: false,
  error: "",
  isLoading: false
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state)=>{
      state.isAuth = false;
      state.currentUser = {};
    }
  },
  extraReducers: {
    [signUp.fulfilled.type]: (state, action) => {
      state.isAuth = true;
      state.error = "";
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    [signUp.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signUp.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logIn.fulfilled.type]: (state, action) => {
      state.isAuth = true;
      state.error = '';
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    [logIn.pending.type]: (state) => {
      state.isLoading = true;
    },
    [logIn.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [chooseRoles.fulfilled.type]: (state, action)=>{
      state.isLoading =false;
      state.error = '';
      state.currentUser = action.payload;
    },
    [chooseRoles.pending.type]: (state) => {
      state.isLoading = true;
    },
    [chooseRoles.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const {logOut} = UserSlice.actions

export default UserSlice.reducer;