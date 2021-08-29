import React from "react";
import './app.css';
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"

export default function App() {
  return (
  <div className ="homepage">
    <div>
      <Header />
    </div>

    <div>
      <Body />
    </div>

    <div>
      <Footer />
    </div>



    </div>
  )
}
