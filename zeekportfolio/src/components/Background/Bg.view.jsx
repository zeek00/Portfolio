import React from "react";
import '../Background/Bg.style.css';
import Contact from "../Contact/Contact.view";
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
        
    
    
   
  );
}

export default Bg;
