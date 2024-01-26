import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/authSlice";
import roomsDataReducer from "../slice/roomsDataSlice";
const rootReducer = combineReducers({
auth:userReducer,
data:roomsDataReducer,
})
export default rootReducer;