import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  freeRoomsOnly: false,
  filters: {},
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFreeRoomsOnly(state, action) {
      state.freeRoomsOnly = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.freeRoomsOnly = false;
      state.filters = {};
    },
  },
});

export const { setFreeRoomsOnly, setFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;