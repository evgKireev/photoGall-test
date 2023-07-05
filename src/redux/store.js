import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import isLoading from './isLoading';
import photoSlice from './photoSlice';

export default configureStore({
  reducer: {
    categoriesSlice,
    isLoading,
    photoSlice,
  },
});
