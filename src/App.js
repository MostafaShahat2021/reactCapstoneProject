import { Route, Routes } from 'react-router-dom';

function App() {
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
