import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/authSlice";
import roomsDataReducer from "../slice/roomsDataSlice";
import filterReducer from "../slice/filterSlice";
import roomReducer from "../slice/roomSlice"
const rootReducer = combineReducers({
user:userReducer,
data:roomsDataReducer,
filter:filterReducer,
room:roomReducer
})
export default rootReducer;