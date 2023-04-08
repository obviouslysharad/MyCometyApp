import { combineReducers } from "redux";
import { cometyDataSlice } from "./reducers/cometyData/cometyDataReducer";
import { cometyDetailsSlice } from "./reducers/cometyDetails/cometyDetailsReducer";
import { commonDataSlice } from "./reducers/commonData/commonDataReducer";

export default combineReducers({
    cometyData: cometyDataSlice.reducer,
    cometyDetails: cometyDetailsSlice.reducer,
    commonData: commonDataSlice.reducer,
})