import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./reducers/usersReducer";

const store = configureStore({
    reducer: usersSlice.reducer
  });

export default store;