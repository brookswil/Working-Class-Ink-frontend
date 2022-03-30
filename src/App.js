import React from "react";
import GlobalStyle from './globalStyles';
import HOME from './pages/HomePage/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components"


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<HOME/>} />
        {/* <Route path='/tattoo' element={TATTOO} />
        <Route path='/piercing' element={PIERCING} />
        <Route path='/laser' element={LASER} />
        <Route path='/about' element={ABOUT} />
        <Route path='/location' element={LOCATION} />
        <Route path='/contact' element={CONTACT} />
        <Route path='/employee-portal' element={employee-portal} /> */}
      </Routes>
    </Router>
  );
}

export default App;
