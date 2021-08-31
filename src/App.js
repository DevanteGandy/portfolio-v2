import React from "react";
import './app.css';
import Header from "./components/head/Header.js"
import Body from "./components/body/Body.js"
import Footer from "./components/foot/Footer.js"

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
