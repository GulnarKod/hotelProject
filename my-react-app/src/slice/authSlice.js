import { createSlice } from "@reduxjs/toolkit";
const userSlice= createSlice({
  
    name: 'user',
    initialState:{
        email:'',
        password:'',
        token:'',
        id: '',
    },
    reducers:{
        
        setUserSuccess:(state,action)=>{
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.token=action.payload.token;
            state.id=action.payload.id;
        },
        
        logoutUser:(state)=>{
            state.email='';
            state.token='';
            state.id='';
            
        },
    },
});
export const{setUserSuccess,logoutUser}=userSlice.actions;
export default userSlice.reducer;
