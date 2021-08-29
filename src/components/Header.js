import { div } from "prelude-ls";
import React from "react";
import "./header.css"
import Desktop from "./Desktop.js"
import Mobile from "./Mobile.js"

export default function Header() {
    return (
       <div className="header">
           <div className="logo">Dg.</div>
           <div className="menu">
              <div className="desktop">
                  <Desktop />
              </div>
              <div className="mobile">
              <Mobile />
              </div>
           </div>
       </div>
    )
  }