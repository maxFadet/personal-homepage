import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLocalStorage } from './themeLocalStorage';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: getThemeFromLocalStorage(),
    },
    reducers: {
        switchTheme: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { switchTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.darkMode;

export default themeSlice.reducer;