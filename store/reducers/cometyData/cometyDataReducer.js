import { createSlice } from "@reduxjs/toolkit";

export const cometyDataSlice = createSlice({
  name: "cometyData",
  initialState: {
    activeCometyName: "",
    cometyAmount: 0,
    usersData: [],
    cometyStartDate: "",
    interestOfTheMonth: "",
    winnerOfTheMonth: "",
    activeMonth: "",
    activeCometyId: "",
  },
  reducers: {
    setActiveCometyName: (state, action) => {
      state.activeCometyName = action.payload;
    },
    setActiveCometyId: (state, action) => {
      state.activeCometyId = action.payload;
    },
    addUserData: (state, action) => {
      state.usersData.push(action.payload);
    },
    setCometyAmount: (state, action) => {
      state.cometyAmount = action.payload;
    },
    setCometyStartDate: (state, action) => {
      state.cometyStartDate = action.payload;
    },
    setInterestOfTheMonth: (state, action) => {
      state.interestOfTheMonth = action.payload;
    },
    setWinnerOfTheMonth: (state, action) => {
      state.winnerOfTheMonth = action.payload;
    },
    updateUsersData: (state, action) => {
      const updatedUsersData = state.usersData.reduce((acc, user) => {
        const userData =
          user.memberId === action.payload.selectedMember?.memberId
            ? {
                ...user,
                amount:
                  state.cometyAmount -
                  (state.cometyAmount * action.payload.interest) / 100,
                isWinner: true,
              }
            : {
                ...user,
                amount:
                  (state.cometyAmount -
                    (state.cometyAmount * action.payload.interest) / 100) /
                  state.usersData.length,
                isWinner: false,
              };
        return [...acc, userData];
      }, []);
      state.usersData = updatedUsersData;
    },
    setActiveMonth: (state, action) => {
      state.activeMonth = action.payload
    }
  },
});

export const {
  setActiveCometyId,
  setActiveCometyName,
  addUserData,
  setCometyAmount,
  setCometyStartDate,
  setInterestOfTheMonth,
  setWinnerOfTheMonth,
  updateUsersData,
  setActiveMonth
} = cometyDataSlice.actions;
