import { createSlice} from "@reduxjs/toolkit";


const userSlice= createSlice({
  
    name: 'user',
    initialState:{
         user: null,
        email:null,
        loading:false,
        error:null,
    },
    reducers:{
        fetchLogin:(state)=>{
          state.loading=true;
          state.error=null;  
        },
        
        loginSuccess:(state,action)=>{
            state.email=action.payload.email;
            state.user=action.payload;
            state.loading=false;
            state.error=null;
        },
        loginFailure:(state, action)=>{
            state.error=action.payload.error;
        },
        
        logout:(state)=>{
           state.email=null;
         state.user=null;
        state.error=null;
        state.loading=false;
        },

    },
});
export const{fetchLogin,loginSuccess,loginFailure,logout}=userSlice.actions;
export default userSlice.reducer;
