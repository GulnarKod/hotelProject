import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/authSlice";
import roomsDataReducer from "../slice/roomsDataSlice";
import filterReducer from "../slice/filterSlice";
const rootReducer = combineReducers({
user:userReducer,
data:roomsDataReducer,
filter:filterReducer,
})
export default rootReducer;