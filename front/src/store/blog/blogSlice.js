import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        isLoadingEvents: true,
        events : [],
        activeEvent: null
    },
    reducers: {
        setEntradas: ( state, action ) => {
            state.events = action.payload ;
        },
        onSetActiveEvent: ( state, { payload }) => {
            state.activeEvent = payload;
        },
        addNewEntrada: ( state, action ) => {
            state.events.push( action.payload );
        },
    }
});

export const { 
    setEntradas,
    addNewEntrada,
    onSetActiveEvent, 
} = blogSlice.actions;