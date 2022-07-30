import React from "react";
import '../Background/Bg.style.css';
import Home from "../Home/Home.view";
import Drawer from "../Drawer/Drawer.view";
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
