import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    isLoading: false,
    isError: false,
  },

  reducers: {
    fetchProjects: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setLoading: (state, { payload: isLoading }) => {
      state.isLoading = isLoading;
    },
    setError: (state, { payload: isError }) => {
      state.isError = isError;
    }
  },
});

export const {
  fetchProjects,
  setError,
  setLoading,
  setProjects
} = projectsSlice.actions;

export default projectsSlice.reducer;