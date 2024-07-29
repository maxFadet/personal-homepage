import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './components/ProjectsSection/projectsSlice';

export default configureStore({
    reducer: {
        projects: projectsReducer
    }
});