import { createSlice } from "@reduxjs/toolkit";

import { getTestThunk } from "./testThunks";

const initialState = {
    number: 0,
    list: [],
};

const TestSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTestThunk.fulfilled, (state, action) => {
                state.list.push(action.payload.value);
            })
    }
})

export default TestSlice.reducer;

export const { setNumber } = TestSlice.actions;