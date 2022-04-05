import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { blogsAPI } from "./reducers/blogs-slice";
import UserSlice from "./reducers/user-slice";

const rootReducer = combineReducers({
  user: UserSlice,
  [blogsAPI.reducerPath]: blogsAPI.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(blogsAPI.middleware),
      preloadedState,
  });
};
