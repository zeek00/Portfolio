import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bg from './components/Background/Bg.view';
import { ReactNotifications} from 'react-notifications-component'
import Contact from "./components/Contact/Contact.view";
import Home from "./components/Home/Home.view";
import About from "./components/About/About.view";
import Portfolio from "./components/Portfolio/Portfolio.view";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>


                  <Route path="/"  element={<Bg />}/>
                  <Route path="/home"  element={<Home/>}/>
                  <Route path="/contact"  element={<Contact/>}/>
                  <Route path="/about"  element={<About/>}/>
                  <Route path="/portfolio"  element={<Portfolio/>}/>

              </Routes>
          </BrowserRouter>
          <ReactNotifications/>
          </div>

   
  );
}

export default App;
