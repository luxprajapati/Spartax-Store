import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-slate-900 fixed top-0 w-full z-20">
        <Navbar></Navbar>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
};

export default App;
