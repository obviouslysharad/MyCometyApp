import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const cometyDetailsSlice = createSlice({
  name: "cometyDetailsReducer",
  initialState: {
    cometyList: [],
  },
  reducers: {
    addCometyName: (state, action) => {
      state.cometyList = [
        ...state.cometyList,
        { cometyId: [uuidv4()], cometyName: action.payload },
      ];
    },
  },
});

export const { addCometyName } = cometyDetailsSlice.actions;
