import { createSlice } from "@reduxjs/toolkit";

export const commonDataSlice = createSlice({
    name: "commonData",
    initialState: {
        displayOverlay: false,
    },
    reducers: {
        setDisplayOverlay: (state, action) => {
            state.displayOverlay = action.payload;
        },
    }
})

export const { setDisplayOverlay } = commonDataSlice.actions;