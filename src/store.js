import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./features/Homepage/Switcher/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;