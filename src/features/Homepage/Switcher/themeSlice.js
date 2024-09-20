import { createSlice } from '@reduxjs/toolkit';

const localStorageKey = 'darkMode';

const initialState = {
    darkMode: JSON.parse(localStorage.getItem(localStorageKey)) || false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem(localStorageKey, JSON.stringify(state.darkMode));
        },
        setTheme: (state, action) => {
            state.darkMode = action.payload;
            localStorage.setItem(localStorageKey, JSON.stringify(state.darkMode));
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;