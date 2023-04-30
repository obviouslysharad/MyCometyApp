import { combineReducers } from "redux";
import { cometyDataSlice } from "./reducers/cometyData/cometyDataReducer";
import { cometyDetailsSlice } from "./reducers/cometyDetails/cometyDetailsReducer";
import { commonDataSlice } from "./reducers/commonData/commonDataReducer";
import { cometyMonthlySlice } from "./reducers/cometyMonthly/cometyMonthlyReducer";

export default combineReducers({
    cometyData: cometyDataSlice.reducer,
    cometyDetails: cometyDetailsSlice.reducer,
    commonData: commonDataSlice.reducer,
    cometyMonthly: cometyMonthlySlice.reducer,
})