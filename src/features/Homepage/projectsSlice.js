import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        fetchDataRequest: (state) => {
          state.loading = true;
          state.error = null;
        },
        fetchDataSuccess: (state, action) => {
          state.loading = false;
          state.data = action.payload;
        },
        fetchDataFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },
    });
    
    export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = projectsSlice.actions;
    export default projectsSlice.reducer;