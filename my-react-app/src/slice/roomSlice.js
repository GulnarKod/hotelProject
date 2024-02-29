import { createSlice } from "@reduxjs/toolkit";
const roomSlice = createSlice({
    name: 'room',
    initialState: {
        currentItem: null,
        loading: false,
        error: null,

        
    },
    reducers: {

        getCurrentItemFetch: (state) => {
            state.loading = true;
            state.error = null;
        },
        getCurrentItemSuccess: (state, action) => {
            state.currentItem = action.payload;
            state.isShowRoomInfo = true;
        },

        getCurrentItemFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


    },
});
export const { getCurrentItemFetch, getCurrentItemSuccess, getCurrentItemFailure } = roomSlice.actions;
export default roomSlice.reducer;
