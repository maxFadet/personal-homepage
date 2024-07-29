import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './features/Homepage/projectsSlice';

export default configureStore({
    reducer: {
        projects: projectsReducer
    }
});