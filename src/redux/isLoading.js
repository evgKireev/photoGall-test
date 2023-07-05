import { createSlice } from '@reduxjs/toolkit';

const isLoading = createSlice({
  name: 'loading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = isLoading.actions;
export default isLoading.reducer;
