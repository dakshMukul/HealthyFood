import React from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 w-8/12">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700 text-xl">
          Hey 👋, this is{" "}
          <samp className="text-orange-400 font-bold">Mukul Singh</samp>
        </p>
        <p>
          Welcome to HealthyFood, a testament to my passion for web development
          and continuous learning!
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Project Description</h2>
        <p className="text-gray-700">
          This project is a food ordering website that I developed using
          Reactjs, Tailwind, Redux and by integrating real-time Swiggy API.
        </p>
        <br />
        <p>
          Utilizing React.js as the foundation, I've ensured a seamless and
          dynamic user experience, allowing for smooth navigation and real-time
          updates. Tailwind CSS played a pivotal role in achieving the sleek and
          responsive design.
        </p>
        <br />
        <p>
          For efficient state management and data handling, I incorporated
          Redux, enabling robust functionality and seamless interactions
          throughout the platform. This not only enhances user experience but
          also demonstrates my proficiency in managing complex data flows within
          a web application.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Connect with me on social media
        </h2>
        <div className=" flex text-4xl">
          <div>
            <Link to="https://www.linkedin.com/in/mr-mukul-singh/">
              <i class="fa-brands fa-linkedin mr-4"></i>
            </Link>
          </div>
          <div>
            <Link to="https://github.com/dakshMukul">
              <i class="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
