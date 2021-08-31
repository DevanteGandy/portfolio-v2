import { div } from "prelude-ls";
import React, { useState } from "react";
import "./header.css"
import Desktop from "../desktop/Desktop.js"
import Mobile from "../mobile/Mobile.js"
 function Header() {
    const [isOpen,setIsOpen] = useState(false)
    return (
       <div className="header">

           <div className="logo">Devante Gandy.</div>

           <div className="sidebar">

              <div className="desktop">
                  <Desktop />
              </div>

              <div className="mobile">

                <div onClick={()=>setIsOpen(!isOpen)}>
                <i class="fas fa-bars" id="menu-bars"></i>
                </div>

            {isOpen && 
            <Mobile 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            />}

              </div>
           </div>
       </div>
    )
  }
  export default Header;