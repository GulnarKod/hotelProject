import { createSlice } from "@reduxjs/toolkit";
const roomsDataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        currentItem: [],
        isShowRoomInfo: false,
        loading: false,
        error: null,
        // isModalOpen:false,
        // title: "",

        
    },
    reducers: {
        getDatasFetch: (state) => {
            state.loading = true;
            state.error = null;
        },
        getDataSuccess: (state, action) => {
            state.data = action.payload.sort((a, b) => a.number - b.number);
            state.loading = false;
        },
        getDataFailure: (state, action) => {
            state.data = [];
            state.error = action.payload;
        },

        getCurrentItemFetch: (state) => {
            state.loading = true;
            state.error = null;
        },
        getCurrentItemSuccess: (state, action) => {
            state.currentItem = action.payload;
            state.isShowRoomInfo = true;
        },

        getCurrentItemFailure: (state, action) => {
            state.currentItem = [];
            state.error = action.payload;
        },


    },
});
export const { getDatasFetch, getDataSuccess, getDataFailure, getCurrentItemFetch, getCurrentItemSuccess, getCurrentItemFailure } = roomsDataSlice.actions;
export default roomsDataSlice.reducer;
