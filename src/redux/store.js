import { configureStore } from '@reduxjs/toolkit';
import JobReducer from './jobs/jobsSlice';

const store = configureStore({
  reducer: {
    jobs: JobReducer,
  },
});

export default store;
