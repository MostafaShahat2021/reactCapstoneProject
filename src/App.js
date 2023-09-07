import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getJobs } from './redux/jobs/jobsSlice';
import Header from './components/Header';
import AllJobs from './components/AllJobs';
import JobsDetails from './components/JobDetails';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllJobs />} />
        <Route path="/details/:id" element={<JobsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
