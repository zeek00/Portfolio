import React from "react";
import '../Background/Bg.style.css';
import Contact from "../Contact/Contact.view";
<<<<<<< HEAD
import Header from "../Header/Header.view";
import Home from "../Home/Home.view";
function Bg() {
  return (
    <body>
      <div className="bg-img">
        <Home/>
      
      </div>
        
    </body>
=======
import Home from "../Home/Home.view";
import Drawer from "../Drawer/Drawer.view";
/**import Header from "../Header/Header.view";
import Home from "../Home/Home.view"; */
function Bg() {
  return (
    
      <div className="bg-img">
          <div className="header-container">
              <Drawer/>
          </div>
        <Home/>
        
      
      </div>
        
    
>>>>>>> 025e7a9ad3ffdd91b1f3fc1d49d7c677f30a0791
    
   
  );
}

<<<<<<< HEAD
export default Bg
=======
export default Bg;
>>>>>>> 025e7a9ad3ffdd91b1f3fc1d49d7c677f30a0791
