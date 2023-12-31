import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  status: 'idle',
  error: null,
};

const baseUrl = 'https://remotive.com/api/remote-jobs?limit=100';

export const getJobs = createAsyncThunk('jobs/getJobs', async () => {
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data.jobs;
  } catch (error) {
    throw new Error('failed to fetch jobs data');
  }
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        const jobsList = action.payload;
        return ({
          ...state,
          jobs: jobsList,
          status: 'success',
        });
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
