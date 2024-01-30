import { createSlice } from '@reduxjs/toolkit';

export const onLineSlice = createSlice({
    name: 'onLine',
    initialState: {
      onlineStatus: true,
    },
    reducers: {
      setOnline: ( state, action ) => {
          state.onlineStatus = action.payload ;
      },
    }
});

export const { 
    setOnline,
} = onLineSlice.actions;