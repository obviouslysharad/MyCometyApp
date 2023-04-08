import { createSlice } from "@reduxjs/toolkit";

export const cometyDataSlice = createSlice({
    name: "cometyData",
    initialState: {
        selectedCometyName: '',
        cometyAmount: 0,
        usersData: [],
        cometyStartDate: '',
    },
    reducers: {
        setSelectedCometyName: (state, action) => {
            state.selectedCometyName = action.payload;
        },
        addUserData: (state, action) => {
            state.usersData.push(action.payload);
        },
        setCometyAmount: (state, action) => {
            state.cometyAmount = action.payload;
        },
        setCometyStartDate: (state, action) => {
            state.cometyStartDate = action.payload;
        }
    }
})

export const { setSelectedCometyName, addUserData, setCometyAmount, setCometyStartDate } = cometyDataSlice.actions;