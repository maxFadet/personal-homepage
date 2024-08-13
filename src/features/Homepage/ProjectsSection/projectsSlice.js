import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  
  reducers: {
    fetchDataRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    setProjects: (state, action) => {
      state.data = action.payload;
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
  fetchDataRequest,
  setError,
  setLoading,
  setProjects
} = projectsSlice.actions;

export default projectsSlice.reducer;