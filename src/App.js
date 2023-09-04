import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getJobs } from './redux/jobs/jobsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Navbar</h1>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div><h1>Jobs Data</h1></div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
