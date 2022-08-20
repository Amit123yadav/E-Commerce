import React from 'react';
import Home from './Home';
import {Route,Routes} from "react-router-dom";
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
