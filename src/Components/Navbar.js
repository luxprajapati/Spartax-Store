import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-14 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 flex items-baseline">
            {/* <img src="/Assets/site-logo.png"  alt="Logo"></img> */}
            <img
              src="https://websitedemos.net/sports-wear-store-04/wp-content/uploads/sites/828/2021/04/site-logo.svg"
              alt="Logo"
              className="h-8"
            ></img>
            <span className="font-bold text-2xl text-slate-100 font-serif italic pl-2">
              Store
            </span>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="text-slate-100 font-bold absolute  -right-2 -top-1 bg-orange-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
