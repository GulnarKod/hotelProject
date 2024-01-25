import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/authSlice";
const rootReducer = combineReducers({
auth:userReducer,
})
export default rootReducer;