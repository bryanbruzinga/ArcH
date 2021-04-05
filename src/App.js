import React from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./global.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
