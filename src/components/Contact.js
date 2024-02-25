import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Connect With Me</h2>
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
  );
};

export default Contact;
