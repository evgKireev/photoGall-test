import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    valueCategori: 0,
    inputValue: '',
    pogination: 1,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.valueCategori = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setPogination: (state, action) => {
      state.pogination = action.payload;
    },
  },
});

export const { setActiveCategory, setInputValue, setPogination } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
