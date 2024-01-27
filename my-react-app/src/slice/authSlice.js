import { createSlice,createAction } from "@reduxjs/toolkit";
export const login =createAction('auth/login');

const userSlice= createSlice({
  
    name: 'user',
    initialState:{
        user:null,
        isLoggedIn:false,
        error:null,
    },
    reducers:{
        
        setLoginSuccess:(state,action)=>{
            state.user=action.payload.user;
            state.isLoggedIn=true;
            state.error=null;
        },
        setLoginFailure:(state, action)=>{
            state.error=action.payload.error;
        },
        
        logoutUser:(state)=>{
            state.user=null;
            state.isLoggedIn=false;
            state.error=null;
        },

    },
});
export const{setLoginSuccess,setLoginFailure,logoutUser}=userSlice.actions;
export default userSlice.reducer;
