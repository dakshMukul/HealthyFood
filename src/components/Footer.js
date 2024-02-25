import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-4 flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-wrap mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">About Us</h2>
              <p className="text-sm">
                This project is a food ordering website that I developed using
                Reactjs, Tailwind, Redux and by integrating real-time Swiggy
                API.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0 ">
              <Contact />
            </div>
          </div>
          <hr className="border-gray-700 my-8" />
        </div>
        <div className="text-sm text-center">
          &copy; {new Date().getFullYear()} [HealthyFood]. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
