import { createSlice } from "@reduxjs/toolkit";

export const commonDataSlice = createSlice({
    name: "commonData",
    initialState: {
        activePopup: "",
        activeScreen: "CREATE_COMETY",
        activePopupProps: {}
    },
    reducers: {
        setActivePopup: (state, action) => {
            state.activePopup = action.payload;
        },
        setActivePopupProps: (state, action) => {
            state.activePopupProps = action.payload;
        },
        setActiveScreen: (state, action) => {
            state.activeScreen = action.payload;
        }
    }
})

export const { setActivePopup, setActivePopupProps, setActiveScreen } = commonDataSlice.actions;