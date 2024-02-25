import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../utils/img/logo.png";

const Heading = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="fixed top-0 bg-white  w-full flex justify-between items-center shadow-md z-50 ">
      <div className="flex items-center mx-4">
        <div className="logo-container w-20 h-20 overflow-hidden mx-4 transition-transform transform hover:scale-110">
          <img className="w-full h-full  object-contain  " src={logo} />
        </div>
      </div>
      <div className="nav-container font-semibold">
        <ul className="nav-items  flex space-x-20 ">
          <li>
            <Link to={"/"} className="">
              <i class="fa-solid fa-house mr-2"></i>
              Home
            </Link>
          </li>
          <li>
            <i class="fa-solid fa-tags mr-2"></i>Offers
          </li>
          <li className="">
            <i class="fa-solid fa-cart-plus mr-1"></i>
            <Link to={"/cart"}>({cartItems.length} items)</Link>
          </li>
          <li>
            <i class="fa-solid fa-id-badge mr-2"></i>
            <Link to={"/contact"}>Contact Me</Link>
          </li>
          <li>
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
    </div>
  );
};

export default Heading;
