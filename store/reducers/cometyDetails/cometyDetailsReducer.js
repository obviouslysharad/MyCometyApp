import { createSlice } from "@reduxjs/toolkit";

export const cometyDetailsSlice = createSlice({
  name: "cometyDetailsReducer",
  initialState: {
    cometyList: [],
    activeCometyId: "",
    activeMonth: "",
    currentUsersData: [],
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
  },
  reducers: {
    addComety: (state, action) => {
      state.cometyList = [...state.cometyList, action.payload];
    },
    setActiveCometyId: (state, action) => {
      state.activeCometyId = action.payload;
    },
    setActiveMonth: (state, action) => {
      state.activeMonth = action.payload;
    },
    addUserData: (state, action) => {
      state.currentUsersData = [...state.currentUsersData, action.payload];
    },
    initiateComety: (state, action) => {
      state.cometyList = state.cometyList.map((comety) => {
        if (comety.cometyId === state.activeCometyId) {
          comety.startDate = action.payload.startDate;
          comety.amount = action.payload.amount;
          comety.monthlyData = state.monthsList.reduce((acc, month) => {
            return { ...acc, [month]: { usersData: state.currentUsersData } };
          }, {});
        }
        return comety;
      });
      state.activeMonth = state.monthsList[action.payload.activeMonthBoolean];
    },
    updateWinnerUsersData: (state, action) => {
      state.cometyList = state.cometyList.map((comety) => {
        if (comety.cometyId === state.activeCometyId) {
          comety.monthlyData[state.activeMonth].usersData = comety.monthlyData[
            state.activeMonth
          ].usersData.map((user) => {
            return user.memberId === action.payload.selectedMember?.memberId
              ? {
                  ...user,
                  amount:
                    comety.amount -
                    (comety.amount * action.payload.interest) / 100,
                  isWinner: true,
                }
              : {
                  ...user,
                  amount:
                    (comety.amount -
                      (comety.amount * action.payload.interest) / 100) /
                    comety.monthlyData[state.activeMonth].usersData.length,
                  isWinner: false,
                };
          });
        }
        return comety;
      });
    },
    updatePaidUserData: (state, action) => {
      state.cometyList = state.cometyList.map((comety) => {
        if (comety.cometyId === state.activeCometyId) {
          comety.monthlyData[state.activeMonth].usersData = comety.monthlyData[
            state.activeMonth
          ].usersData.map((user) => {
            if (user.memberId === action.payload.memberId) {
              user = { ...user, ...action.payload };
            }
            return user;
          });
        }
        return comety;
      });
    },
    resetSelectedCometyDetails: (state) => {
      (state.activeCometyId = ""),
        (state.activeMonth = ""),
        (state.currentUsersData = []);
    },
  },
});

export const {
  addComety,
  addMonthlyData,
  setActiveCometyId,
  initiateComety,
  setActiveMonth,
  updateWinnerUsersData,
  updatePaidUserData,
  addUserData,
  resetSelectedCometyDetails,
} = cometyDetailsSlice.actions;
