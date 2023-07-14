import React from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/padStyle.css';
import Undefined from './components/undefined';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<Undefined />}/>
      </Routes>
    </>
  );
}

export default App;
