import { configureStore } from '@reduxjs/toolkit';
import { blogSlice, uiSlice, onLineSlice } from './index';

export const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
    ui:   uiSlice.reducer,
    onLine: onLineSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})