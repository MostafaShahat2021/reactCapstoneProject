import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  jobs: [],
  status: 'idle',
  error: null,
};

const baseUrl = 'https://remotive.com/api/remote-jobs';

export const getJobs = createAsyncThunk('jobs/getJobs', async () => {
  try {
    const res = await axios.get(baseUrl);
    // return console.log(res.data.jobs);
    return res.data.jobs;
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
