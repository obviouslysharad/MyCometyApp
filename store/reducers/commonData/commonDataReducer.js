import { createSlice } from "@reduxjs/toolkit";

export const commonDataSlice = createSlice({
    name: "commonData",
    initialState: {
        activePopup: "MEMBER_ADD",
        activePopupProps: {}
    },
    reducers: {
        setActivePopup: (state, action) => {
            state.activePopup = action.payload;
        },
        setActivePopupProps: (state, action) => {
            state.activePopupProps = action.payload;
        }
    }
})

export const { setActivePopup, setActivePopupProps } = commonDataSlice.actions;