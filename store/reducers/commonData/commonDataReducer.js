import { createSlice } from "@reduxjs/toolkit";

export const commonDataSlice = createSlice({
    name: "commonData",
    initialState: {
        activePopup: "MEMBER_ADD",
    },
    reducers: {
      
        setActivePopup: (state, action) => {
            state.activePopup = action.payload;
        }
    }
})

export const { setActivePopup } = commonDataSlice.actions;