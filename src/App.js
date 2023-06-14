import './App.css';
import Navbar from './components/Navbar';
import Parks from './components/Parks';
import React from 'react';
import ParkForm from './components/ParkForm';
import Footer from './components/Footer';
import HotelForm from './components/HotelForm';
import Home from './components/Home';
import ActivityForm from './components/ActivityForm';
import ParksDash from './components/ParksDash';
import HotelDash from './components/HotelDash';
import SafariForm from './components/SafariForm';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import AppState from './contexts/AppState';
import Blogs from './components/Blogs';
import ContactDetails from './components/ContactDetails';




function App() {
  return (
    <AppState>
      <Router>
    <div className="App"> 
      <Navbar></Navbar>
    <Routes>
      <Route exact path="/parks" element={<Parks/>}></Route>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path='/park/:id1' element={<ParkForm></ParkForm>}></Route>
      <Route exact path="/safari-form/:id1/:id2" element={<SafariForm></SafariForm>}></Route>
      <Route exact path="/hotel-form/:id1/:id2" element={<HotelForm></HotelForm>}></Route>
      <Route exact path="/activity-dash-form" element={<ActivityForm></ActivityForm>}></Route>
      <Route exact path="/park-dash-form" element={<ParksDash></ParksDash>}></Route>
      <Route exact path='/hotel-dash-form' element={<HotelDash></HotelDash>}></Route>
      <Route exact path='/blogs' element={<Blogs></Blogs>}></Route>
    </Routes> 
    <ContactDetails></ContactDetails>
    <Footer></Footer>
    </div>
    </Router>
    </AppState>
  );
}

export default App;
