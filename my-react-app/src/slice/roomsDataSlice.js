import { createSlice } from "@reduxjs/toolkit";
const roomsDataSlice=createSlice({
    name:'data',
    initialState:{
        data: [],
        loading: false,
        error: null,
    },
    reducers:{
        getDataStart:(state)=>{
state.loading=true;
state.error=null;
        },
        getDataSuccess:(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        },
        getDataFailure:(state,action)=>{
            state.data=[];
            state.error=action.payload;
        },
    },
});
export const {getDataStart,getDataSuccess,getDataFailure}=roomsDataSlice.actions;
export default roomsDataSlice.reducer;
