import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { AddCake } from './components/AddCake.jsx'

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddCake />
      <Footer />
    </div>
  );
}

export default App;

const NavBar = () => (
  <nav className="navbar navbar-dark mb-4" style={{ backgroundColor: '#4B57C3' }}>
    <h4 className="ml-5" style={{ color: '#90DACB' }} >Create your favorite desserts list</h4>
  </nav>
)

const Footer = () => (
  <div className="jumbotron py-2" id='footer'>
    <div className="container">
      <h3 style={{ color: '#90DACB' }}>- React Web-Storage & CRUD App -</h3>
      <p className="lead small newColor">I created this app with : ReactJS - Bootstrap 4 - Web Storage API -  </p>
      <p className="lead small newColor">Simple Create Read Update & Delete item from React State synchonized with Local Storage.</p>
      <p className='small newColor'>© Avril 2020 Laurent CAMINADE || all rights reserved</p>
    </div>
  </div>
)