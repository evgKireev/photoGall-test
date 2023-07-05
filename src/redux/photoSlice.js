import { createSlice } from '@reduxjs/toolkit';

const photoSlise = createSlice({
  name: 'photo',
  initialState: {
    photoUrl: '',
    photoIdx: 0,
  },
  reducers: {
    setUrlPhoto: (state, action) => {
      state.photoUrl = action.payload;
    },
    setIdxPhoto: (state, action) => {
      state.photoIdx = action.payload;
    },
  },
});

export const { setUrlPhoto, setIdxPhoto } = photoSlise.actions;
export default photoSlise.reducer;
