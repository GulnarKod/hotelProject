import { createSlice } from "@reduxjs/toolkit";
const initialState={
    username: null,
    token: null,
    id: null,
};
const userSlice=createSlice({
    name: 'user',
    initialState,
    redusers:{
        setUser(state,action){
            state.username=action.payload.username;
            state.token=action.payload.token;
            state.id=action.payload.id;
        }
    },
});
export const{setUser}=userSlice.actions;
export default userSlice.reducer;
