import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import {
  getActiveMonth,
  getCometyAmount,
  getUsersData,
} from "../cometyData/cometyDataSelector";

export const cometyMonthlySlice = createSlice({
  name: "cometyMonthlyReducer",
  initialState: {
    monthsList: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEV",
    ],
    dataAllMonths: {},
  },
  reducers: {
    addMonthData: (state, action) => {
      state.dataAllMonths = {
        ...state.dataAllMonths,
        ...action.payload,
      };
    },
  },
});

export const { addMonthData } = cometyMonthlySlice.actions;
