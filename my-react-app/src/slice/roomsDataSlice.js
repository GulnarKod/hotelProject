import { createSlice } from "@reduxjs/toolkit";
const roomsDataSlice=createSlice({
    name:'data',
    initialState:{
        data: [],
        currentRoom:{},
        showItems:[],
        isShowRoomInfo:false,
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
        openModalRoomsInfo: (state, action) => {
            state.currentRoom = state.showItems.find(item => item.id === action.payload);
            state.isShowRoomInfo = true;
        },
    },
});
export const {getDataStart,getDataSuccess,getDataFailure, openModalRoomsInfo}=roomsDataSlice.actions;
export default roomsDataSlice.reducer;
