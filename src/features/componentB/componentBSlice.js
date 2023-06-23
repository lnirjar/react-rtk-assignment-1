import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: ''
}

const componentBSlice = createSlice({
    name: 'componentB',
    initialState,
    reducers: {
        textChanged: (state, action) => {
            state.text = action.payload;
        },
    }
});

export default componentBSlice.reducer;
export const { textChanged } = componentBSlice.actions;