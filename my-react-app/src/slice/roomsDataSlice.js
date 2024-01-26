import { createSlice } from "@reduxjs/toolkit";
const roomsDataSlice=createSlice({
    name:'data',
    initialState:{
        data: '',
        loading: false,
        error: '',
    },
    reducers:{
        getDataStart:(state)=>{
state.loading=true;
state.error='';
        },
        getDataSuccess:(state,action)=>{
            state.data=action.payload;
            state.error='';
        },
        getDataFailure:(state,action)=>{
            state.data='';
            state.error=action.payload;
        }
    }
});
export const {getDataStart,getDataSuccess,getDataFailure}=roomsDataSlice.actions;
export default roomsDataSlice.reducer;
