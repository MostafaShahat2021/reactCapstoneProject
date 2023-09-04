import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  status: 'idle',
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default jobsSlice.reducer;
