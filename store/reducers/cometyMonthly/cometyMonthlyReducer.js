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
    updateMemberData: (state, action) => {
      if (!action.payload?.activeMonth) return;
      const activeMonth = action.payload.activeMonth;
      const memberData = action.payload.memberData;
      const previousUserData = state.dataAllMonths[activeMonth]['userData'];
      const updatedData = previousUserData.map(element => {
        if(element.memberId === memberData.memberId) {
          element = memberData;
        }
        return element;
      });
      state.dataAllMonths[activeMonth]['userData'] = updatedData;
    }
  },
});

export const { addMonthData, updateMemberData } = cometyMonthlySlice.actions;
