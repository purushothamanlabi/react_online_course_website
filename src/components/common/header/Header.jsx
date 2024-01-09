import React, { useState } from "react";
import { nav } from "./../../data/Data.js";
import "./header.css";

const Navigation = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center bg-white justify-between backcol py-4 md:px-10 px-2 text-center">
        <img src="./images/logo.png" alt="" className="navimg" />
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {nav.map((link, index) => (
            <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
              <a className="text-gray-800 duration-500">{link.text}</a>
            </li>
          ))}
        </ul>
        <button className="btn-login">
          <a href="">Login</a>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
