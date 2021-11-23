import React from 'react';
import { BrowserRouter,
  Routes,
  Route,
  Link } from "react-router-dom"
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() :JSX.Element{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
