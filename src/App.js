import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import User from "./Components/UserMaintenance/User";
import "./global.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Body>
          <Route path="pagina" element={<User />} />
        </Body>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
