import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllJobs from './components/AllJobs';
// import { getJobs } from './redux/jobs/jobsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getJobs());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<AllJobs />}
        />
      </Routes>
    </>
  );
}

export default App;
