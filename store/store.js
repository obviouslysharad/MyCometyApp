import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./rootReducer";

const store = configureStore({reducer: combinedReducers});

export default store;;