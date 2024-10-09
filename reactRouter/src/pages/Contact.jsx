import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Contact;
