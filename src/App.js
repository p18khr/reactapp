import './App.css';
import Navbar from './components/Navbar';
import Parks from './components/Parks';
import Home from './components/Home';
import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import ParkForm from './components/ParkForm';
import Form from './components/Form';
import Footer from './components/Footer';
import HotelForm from './components/HotelForm';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path="/parks" element={<Parks/>}></Route>
      <Route path="/" element={<Home/>} ></Route>
      <Route path='/park' element={<ParkForm></ParkForm>}></Route>
      <Route path="/safari-form" element={<Form></Form>}></Route>
      <Route path="/hotel-form" element={<HotelForm></HotelForm>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
