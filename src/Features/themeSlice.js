import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'Theme',
    initialState: false,
    reducers: {
        toggleTheme: (state) => {
            return !state;
        }
    }
});


export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;