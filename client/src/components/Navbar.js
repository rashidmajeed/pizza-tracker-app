import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
          <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
       <div>
          <ul className="flex item-center mt-6 mr-6">
            <li className="ml-6">
            <Link to={"/menu"}>Menu</Link>
            </li>
            <li className="ml-6">
              <Link to={"/offers"}>Offers</Link>
               </li>
            <li className="ml-6">
              <Link to={"/register"}>Register</Link>
            </li>
            <li className="ml-6">
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link
                to={"/cart"}
                className="inline-block px-4 py-2 ml-5 mb-3 rounded-full"
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/cart.png"}
                  alt="logo"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
