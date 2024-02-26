import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../utils/img/logo.png";

const Heading = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const [isBarOpen, setIsBarOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="fixed top-0 bg-white  w-full md:flex md:justify-between md:items-center shadow-md z-50 ">
      <div className="flex items-center mx-6 justify-between items-center">
        <div className="logo-container w-20 h-20 overflow-hidden  transition-transform transform hover:scale-110">
          <img className="w-full h-full  object-contain  " src={logo} />
        </div>
        <span className="md:hidden" onClick={() => setIsBarOpen(!isBarOpen)}>
          <i
            className={`fa-solid ${
              isBarOpen ? "fa-xmark" : "fa-bars"
            } text-3xl cursor-pointer block`}
            onClick={() => setIsBarOpen(!isBarOpen)}
          ></i>
        </span>
      </div>
      <div
        className={`nav-container font-semibold ${
          isBarOpen ? "block" : "hidden"
        } md:block  `}
      >
        <ul
          className="nav-items  md:flex md:items-center md:space-x-20
        bg-white md:w-auto md:py-0 py-4 md:pl-0 pl-7 
          transition-all ease-in duration-500"
        >
          <li className="m-4 md:my-0">
            <Link to={"/"} className="">
              <i class="fa-solid fa-house mr-2"></i>
              Home
            </Link>
          </li>
          <li className="m-4 md:my-0">
            <i class="fa-solid fa-tags mr-2"></i>Offers
          </li>
          <li className="m-4 md:my-0">
            <i class="fa-solid fa-cart-plus mr-1"></i>
            <Link to={"/cart"}>({cartItems.length} items)</Link>
          </li>
          <li className="m-4 md:my-0">
            <i class="fa-solid fa-id-badge mr-2"></i>
            <Link to={"/contact"}>Contact Me</Link>
          </li>
          <li className="m-4 md:my-0">
            <div className="w-24  font-bold">
              <i class="fa-solid fa-user mr-2"></i>
              <button
                onClick={() => {
                  isLoggedIn === "Login"
                    ? setIsLoggedIn("Logout")
                    : setIsLoggedIn("Login");
                }}
              >
                {isLoggedIn}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Heading;
